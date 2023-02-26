import React from 'react';
import type { Repo } from '@/components/repositories/types';
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as FilledHeartIcon } from '@heroicons/react/24/solid';

type Props = {
  repo: Repo;
  isSaved: boolean;
  onToggleRepo: (repo: Repo) => void;
};

export const RepositoryCard = ({ repo, isSaved, onToggleRepo }: Props) => {
  return (
    <div className="flex justify-between p-10 m-5 bg-white border rounded rounded-xl">
      <div>
        <h2 className="text-sm font-bold">{repo.full_name}</h2>
      </div>
      <button className="w-10" onClick={() => onToggleRepo(repo)}>
        {isSaved ? (
          <FilledHeartIcon className="fill-primary" />
        ) : (
          <HeartIcon className="stroke-primary" />
        )}
      </button>
    </div>
  );
};
