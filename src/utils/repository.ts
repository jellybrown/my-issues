import type { Repo } from '@/components/repositories';

export const extractRepos = (repoData: { [key: string]: any }[]): Repo[] => {
  const repos: Repo[] = repoData.map(repo => {
    const { id, full_name, description, html_url, language, created_at, updated_at } = repo;
    return {
      id,
      full_name,
      description,
      html_url,
      language,
      created_at: created_at,
      updated_at: created_at,
    };
  });

  return repos;
};
