import { Issue, User } from '@/components/issues/types';

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
    };
    return item;
  });

  return issues;
};
