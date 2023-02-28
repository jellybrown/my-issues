import React, { useEffect, useState } from 'react';
import { ISSUE_STATE, PATH } from '@/constants';
import { IssueState } from '@/components/issues/types';
import { useNavigate, useSearchParams } from 'react-router-dom';

export const useIssueFilter = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currIssueState, setCurrIssueState] = useState(ISSUE_STATE.All);

  useEffect(() => {
    const state = searchParams.get('state');
    if (state) {
      setCurrIssueState(state as IssueState);
    }
  }, [searchParams.get('state')]);

  const updateIssueFilter = (state: IssueState) => {
    navigate(`${PATH.Issues}?state=${state}&page=1`);
  };

  return { currIssueState, updateIssueFilter };
};
