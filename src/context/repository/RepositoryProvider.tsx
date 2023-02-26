import React, { ReactNode, useEffect, useState } from 'react';
import { RepositoryContext } from '@/context/repository/RepositoryContext';
import { repoStorage } from '@/utils';
import { Repo } from '@/components/repositories';

export const RepositoryProvider = ({ children }: { children: ReactNode }) => {
  const [repositories, setRepositories] = useState<Repo[]>([]);

  useEffect(() => {
    repoStorage.saveAll(repositories);
  }, [repositories]);

  const saveRepo = (repo: Repo) => {
    setRepositories(prev => [...prev, repo]);
  };

  const deleteRepo = (repo: Repo) => {
    if (!repositories) return;
    const updated = repositories.filter(r => r.id !== repo.id);
    setRepositories(updated);
  };

  return (
    <RepositoryContext.Provider value={{ repositories, saveRepo, deleteRepo }}>
      {children}
    </RepositoryContext.Provider>
  );
};
