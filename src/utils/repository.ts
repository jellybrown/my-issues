import type { Repo } from '@/components/repositories';
import { convertDateKr } from '@/utils/common';

export const extractRepos = (repoData: { [key: string]: any }[]): Repo[] => {
  const repos: Repo[] = repoData.map(repo => {
    const { id, full_name, description, html_url, language, created_at, updated_at, owner } = repo;
    return {
      id,
      full_name,
      description,
      html_url,
      language,
      created_at: convertDateKr(created_at),
      updated_at: convertDateKr(updated_at),
      created_by: owner.login,
      avatar_url: owner.avatar_url,
    };
  });

  return repos;
};
