/*import React from 'react';

const RepoItem = ({ repo }) => {
  return (
    <div className="repo-item">
      <img src={repo.owner.avatar_url} alt={`${repo.owner.login} avatar`} />
      <div>
        <h2>{repo.name}</h2>
        <p>{repo.description}</p>
        <p>⭐ {repo.stargazers_count}</p>
        <p>👤 {repo.owner.login}</p>
      </div>
    </div>
  );
};


export default RepoItem;*/

import React from "react";
import "./RepoItem.css";

const RepoItem = ({ repo }) => {
  return (
    <div className="repo-item">
      {/* Repository Name */}
      <h2>{repo.name}</h2>

      {/* Repository Description */}
      <p>{repo.description || "No description available."}</p>

      {/* Repository Footer: Image, Owner, Stars */}
      <div className="repo-footer">
        <div className="repo-owner">
          <img src={repo.owner.avatar_url} alt={`${repo.owner.login} avatar`} />
          <span>{repo.owner.login}</span>
        </div>
        <div className="repo-stats">
          <span>
            <i className="fas fa-star"></i> {repo.stargazers_count}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;

