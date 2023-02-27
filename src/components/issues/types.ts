export type User = {
  id: number;
  name: string;
  avatar_url: string;
};

export type IssueState = 'open' | 'closed';

export type Issue = {
  id: number;
  html_url: string;
  title: string;
  state: IssueState;
  assignees: User[];
  created_at: string;
  created_by: string;
  owner: string;
  repo: string;
  commentCount: number;
};
