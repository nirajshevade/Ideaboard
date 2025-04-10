import React, { useState } from 'react';

function IdeaForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;

    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className="idea-form">
      <h2>Add New Idea</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter idea title"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter idea description"
            required
          />
        </div>
        <button type="submit">Add Idea</button>
      </form>
    </div>
  );
}

export default IdeaForm;