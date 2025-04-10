import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';
import './App.css';

function App() {
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    fetchIdeas();
  }, []);

  const fetchIdeas = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/ideas');
      // Sort ideas by likes in descending order
      const sortedIdeas = response.data.sort((a, b) => b.likes - a.likes);
      setIdeas(sortedIdeas);
    } catch (error) {
      console.error('Error fetching ideas:', error);
    }
  };

  const addIdea = async (newIdea) => {
    try {
      const response = await axios.post('http://localhost:5000/api/ideas', newIdea);
      // Add new idea and sort again
      const updatedIdeas = [response.data, ...ideas].sort((a, b) => b.likes - a.likes);
      setIdeas(updatedIdeas);
    } catch (error) {
      console.error('Error adding idea:', error);
    }
  };

  const handleLike = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:5000/api/ideas/${id}/like`);
      // Update idea and sort again
      const updatedIdeas = ideas
        .map(idea => idea._id === id ? response.data : idea)
        .sort((a, b) => b.likes - a.likes);
      setIdeas(updatedIdeas);
    } catch (error) {
      console.error('Error liking idea:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/ideas/${id}`);
      setIdeas(ideas.filter(idea => idea._id !== id));
    } catch (error) {
      console.error('Error deleting idea:', error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <section id="add-idea" className="form-section">
          <IdeaForm onSubmit={addIdea} />
        </section>
        <section id="ideas" className="ideas-section">
          <h2 className="section-title">Latest Ideas</h2>
          <IdeaList
            ideas={ideas}
            onLike={handleLike}
            onDelete={handleDelete}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
