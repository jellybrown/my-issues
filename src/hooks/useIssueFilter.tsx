import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { IssueState } from '@/components/issues/types';
import { ISSUE_STATE, PATH } from '@/constants';

export const useIssueFilter = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [currIssueState, setCurrIssueState] = useState(ISSUE_STATE.All);

  useEffect(() => {
    const state = searchParams.get('state');
    if (state) {
      setCurrIssueState(state as IssueState);
    }
  }, [searchParams]);

  const updateIssueFilter = (state: IssueState) => {
    navigate(`${PATH.Issues}?state=${state}&page=1`);
  };

  return { currIssueState, updateIssueFilter };
};
