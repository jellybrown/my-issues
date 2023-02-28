import { createContext, useContext } from 'react';
import type { Repo } from '@/components/repositories';

type RepoContext = {
  repositories: Repo[] | null;
  saveRepo: (repo: Repo) => void;
  deleteRepo: (repo: Repo) => void;
};

export const RepositoryContext = createContext<RepoContext>({
  repositories: null,
  saveRepo: (repo: Repo) => {},
  deleteRepo: (repo: Repo) => {},
});

export const useRepository = () => {
  const context = useContext(RepositoryContext);

  const { repositories } = context;
  if (!context || !repositories) {
    throw new Error('Repository context가 없습니다.');
  }

  return useContext(RepositoryContext);
};
