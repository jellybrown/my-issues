import React from 'react';
import { RepositoryCard } from '@/components/repositories';
import { TextField } from '@/components/shared';
import { useRepository } from '@/context/repository/RepositoryContext';

export const Favorites = () => {
  const { repositories: savedRepos, deleteRepo } = useRepository();

  return (
    <div>
      {savedRepos && savedRepos?.length === 0 && (
        <div className="mt-36">
          <TextField text={'저장된 레포가 없어요. 검색하고 추가해주세요 :) '} />
        </div>
      )}
      {savedRepos?.map((repo, idx) => (
        <RepositoryCard key={`repo-${idx}`} repo={repo} isSaved={true} onToggleRepo={deleteRepo} />
      ))}
    </div>
  );
};
