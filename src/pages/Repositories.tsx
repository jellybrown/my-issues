import React, { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { githubService } from '@/apis';
import { extractRepos } from '@/utils';
import { RepositoryCard } from '@/components/repositories';
import { useRepository } from '@/context/repository/RepositoryContext';
import type { Repo } from '@/components/repositories';

export const Repositories = () => {
  const [searchParams] = useSearchParams();
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const { repositories: savedRepos, saveRepo, deleteRepo } = useRepository();

  const searchGithubRepos = useCallback(async (query: string) => {
    const data = await githubService.searchRepo({ query });
    const repos = extractRepos(data.items);
    setRepos(repos);
  }, []);

  useEffect(() => {
    const keyword = searchParams.get('q');
    keyword ? searchGithubRepos(keyword) : setRepos(savedRepos);
  }, [searchGithubRepos, searchParams]);

  const onToggleRepo = (repo: Repo) => {
    const isSaved = isSavedRepo(repo.id);
    if (!saveRepo || !deleteRepo) return;

    isSaved ? deleteRepo(repo) : saveRepo(repo);
  };

  const isSavedRepo = (repoId: number) => {
    return !!savedRepos?.some(r => r.id === repoId);
  };

  return (
    <div>
      {repos?.map((repo, idx) => (
        <RepositoryCard
          key={`repo-${idx}`}
          repo={repo}
          isSaved={isSavedRepo(repo.id)}
          onToggleRepo={onToggleRepo}
        />
      ))}
    </div>
  );
};
