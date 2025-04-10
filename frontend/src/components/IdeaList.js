import React from 'react';
import IdeaCard from './IdeaCard';

function IdeaList({ ideas, onLike, onDelete }) {
  if (ideas.length === 0) {
    return (
      <div className="no-ideas">
        <p>No ideas yet. Be the first to share one!</p>
      </div>
    );
  }

  const topIdea = ideas[0]; // First idea is the most liked due to sorting
  const otherIdeas = ideas.slice(1);

  return (
    <div className="ideas-container">
      {/* Top Idea Section */}
      {topIdea && (
        <div className="top-idea-section">
          <h2 className="section-subtitle">Most Popular Idea</h2>
          <div className="top-idea-container">
            <IdeaCard
              key={topIdea._id}
              idea={topIdea}
              onLike={onLike}
              onDelete={onDelete}
              isTopIdea={true}
            />
          </div>
        </div>
      )}

      {/* Other Ideas Section */}
      <div className="other-ideas-section">
        <h2 className="section-subtitle">All Ideas</h2>
        <div className="idea-list">
          {otherIdeas.map((idea) => (
            <IdeaCard
              key={idea._id}
              idea={idea}
              onLike={onLike}
              onDelete={onDelete}
              isTopIdea={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default IdeaList;