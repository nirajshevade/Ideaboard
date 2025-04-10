import React, { useState } from 'react';

function IdeaCard({ idea, onLike, onDelete, isTopIdea }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this idea?')) {
      setIsDeleting(true);
      // Add a small delay to allow the animation to play
      setTimeout(() => {
        onDelete(idea._id);
      }, 300);
    }
  };

  const handleLike = () => {
    const likeButton = document.querySelector(`[data-id="${idea._id}"] .like-button`);
    likeButton.classList.add('liking');
    setTimeout(() => {
      likeButton.classList.remove('liking');
      onLike(idea._id);
    }, 300);
  };

  return (
    <div 
      className={`idea-card ${isTopIdea ? 'top-idea' : ''} ${isDeleting ? 'deleting' : ''}`}
      data-id={idea._id}
    >
      {isTopIdea && (
        <div className="top-idea-badge">
          🏆 Top Idea
        </div>
      )}
      <div className="idea-header">
        <h3>{idea.title}</h3>
        <button 
          className="delete-button"
          onClick={handleDelete}
          title="Delete Idea"
        >
          🗑️
        </button>
      </div>
      <p className="idea-description">{idea.description}</p>
      <div className="idea-footer">
        <div className="idea-meta">
          <span className="date">
            <i className="far fa-calendar"></i> {formatDate(idea.createdAt)}
          </span>
          <span className="likes-count">
            {idea.likes} {idea.likes === 1 ? 'like' : 'likes'}
          </span>
        </div>
        <button 
          className={`like-button ${idea.likes > 0 ? 'has-likes' : ''}`}
          onClick={handleLike}
        >
          <span className="heart-icon">❤️</span>
          Like
        </button>
      </div>
    </div>
  );
}

export default IdeaCard;