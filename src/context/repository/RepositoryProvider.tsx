import React, { ReactNode, useEffect, useState } from 'react';
import { Repo } from '@/components/repositories';
import { RepositoryContext } from '@/context/repository/RepositoryContext';
import { repoStorage } from '@/utils';

export const RepositoryProvider = ({ children }: { children: ReactNode }) => {
  const [repositories, setRepositories] = useState<Repo[]>([]);

  useEffect(() => {
    const savedRepos = repoStorage.getAll() as Repo[] | null;
    if (savedRepos && savedRepos.length > 0) {
      setRepositories(savedRepos);
    }
  }, []);

  useEffect(() => {
    if (repositories.length > 0) {
      repoStorage.saveAll(repositories);
    }
  }, [repositories]);

  const saveRepo = (repo: Repo) => {
    if (repositories.length === 4) {
      return window.confirm('저장소는 4개만 저장이 가능합니다. 삭제 후 다시 시도해주세요.');
    }
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
