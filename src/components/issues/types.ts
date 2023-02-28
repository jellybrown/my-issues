export type User = {
  id: number;
  name: string;
  avatar_url: string;
};

export type IssueState = 'all' | 'open' | 'closed';

export type Issue = {
  id: number;
  html_url: string;
  title: string;
  state: Exclude<IssueState, 'all'>;
  assignees: User[];
  created_at: string;
  created_by: string;
  owner: string;
  repo: string;
  commentCount: number;
};
