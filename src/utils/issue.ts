import { Issue, User } from '@/components/issues/types';

const extractOwnerAndRepo = (url: string) => {
  const githubOwnerAndRepoRegex = /https:\/\/github.com\/(\w+)\/(\w+)/;

  const match = url.match(githubOwnerAndRepoRegex);
  const owner = match ? match[1] : '';
  const repo = match ? match[2] : '';

  return { owner, repo };
};

export const extractIssues = (issueData: { [key: string]: any }[]): Issue[] => {
  const issues = issueData.map(issue => {
    const { id, html_url, title, state, assignees, user, created_at } = issue;
    const assigneesObj: User[] =
      assignees && assignees.length > 0
        ? assignees.map((u: Record<string, any>) => ({
            id: u.id,
            name: u.login,
            avatar_url: u.avatar_url,
          }))
        : [];

    const item: Issue = {
      id,
      html_url,
      title,
      state,
      assignees: assigneesObj,
      created_at: created_at,
      created_by: user?.login,
      ...extractOwnerAndRepo(html_url),
    };
    return item;
  });

  return issues;
};
