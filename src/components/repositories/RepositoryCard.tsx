import React from 'react';
import type { Repo } from '@/components/repositories/types';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as FilledHeartIcon } from '@heroicons/react/24/solid';
import { Card } from '@Shared/Card';

type Props = {
  repo: Repo;
  isSaved: boolean;
  onToggleRepo: (repo: Repo) => void;
};

export const RepositoryCard = ({ repo, isSaved, onToggleRepo }: Props) => {
  return (
    <Card>
      <div className="w-full mr-10">
        <div className="flex items-center w-full">
          <h2 className="text-base font-bold">{repo.full_name}</h2>
          <span className="text-sm ml-5 text-gray-light-3">{repo.language}</span>
        </div>

        <div className="text-sm mt-5 min-h-[50px]">{repo.description}</div>
        <div className="flex items-center mt-7">
          <span className="text-sm text-gray-light-3">마지막 업데이트: {repo.updated_at}</span>
          <div className="w-7 ml-10 rounded rounded-full overflow-hidden">
            <img src={repo.avatar_url} alt="avatar" />
          </div>
        </div>
      </div>
      <button className="w-10" onClick={() => onToggleRepo(repo)}>
        {isSaved ? (
          <FilledHeartIcon className="fill-primary" />
        ) : (
          <HeartIcon className="stroke-primary" />
        )}
      </button>
    </Card>
  );
};
