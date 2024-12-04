import React, { useState, useEffect } from 'react';
import { fetchRepos } from '../Services/api';
import RepoItem from './RepoItem';
import './RepoList.css';

const RepoList = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadRepos = async () => {
      setLoading(true);
      const newRepos = await fetchRepos(page);
      setRepos((prev) => [...prev, ...newRepos]);
      setLoading(false);
    };

    loadRepos();
  }, [page]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="repo-list">
      {repos.map((repo) => (
        <RepoItem key={repo.id} repo={repo} />
      ))}
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default RepoList;
