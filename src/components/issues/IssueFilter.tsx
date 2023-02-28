import React, { MouseEvent } from 'react';
import type { IssueState } from '@/components/issues/types';
import { ISSUE_STATE } from '@/constants';

type Props = {
  currIssueState: IssueState;
  updateIssueFilter: (state: IssueState) => void;
};

export const IssueFilter = ({ currIssueState, updateIssueFilter }: Props) => {
  const onUpdateFilter = (e: MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    const data = target.getAttribute('data-state') as IssueState;
    updateIssueFilter(data);
  };

  return (
    <div className="mx-10 flex justify-end gap-5">
      {ISSUE_STATE_FILTER.map(state => (
        <button
          key={`issue-state-${state.value}`}
          className={`py-2 px-5 text-sm rounded ease-out duration-200 ${
            currIssueState === state.value ? ISSUE_STATE_STYLE.Active : ISSUE_STATE_STYLE.Inactive
          }`}
          data-state={state.value}
          onClick={e => onUpdateFilter(e)}
        >
          {state.name}
        </button>
      ))}
    </div>
  );
};

const ISSUE_STATE_FILTER = [
  {
    value: ISSUE_STATE.All,
    name: '전체',
  },
  {
    value: ISSUE_STATE.Open,
    name: '진행중',
  },
  {
    value: ISSUE_STATE.Closed,
    name: '종료',
  },
];

const ISSUE_STATE_STYLE = {
  Active: 'bg-slate-600 text-slate-300',
  Inactive: 'text-slate-500',
};
