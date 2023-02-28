import type { IssueState } from '@/components/issues/types';

export const ISSUE_STATE: Record<string, IssueState> = {
  All: 'all',
  Open: 'open',
  Closed: 'closed',
};
