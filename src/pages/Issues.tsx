import React, { useCallback, useEffect, useState } from 'react';
import { githubService } from '@/apis';
import { extractIssues, requestPromises } from '@/utils';
import { useRepository } from '@/context/repository/RepositoryContext';
import { Issue, IssueState } from '@/components/issues/types';
import { ISSUE_STATE, PATH } from '@/constants';
import { IssueCard } from '@/components/issues';
import { TextField } from '@Shared/TextField';
import { Pagination } from '@Shared/Pagination';
import { usePagination } from '@/hooks';

export const Issues = () => {
  const [issues, setIssues] = useState<Issue[] | null>(null);
  const { repositories } = useRepository();
  const { currPage, updateCurrPage } = usePagination({ path: PATH.Issues, initialPage: 1 });

  const getIssues = useCallback(async (state: IssueState | 'all') => {
    if (!repositories) return;

    const issueApis = repositories?.map(r => {
      const [owner, repo] = r.full_name.split('/');
      return githubService.getIssue({ owner, repo, state, page: currPage });
    });

    const data = await requestPromises(issueApis || []);
    const issue = extractIssues(data);
    return issue;
  }, []);

  useEffect(() => {
    if (!repositories?.length) {
      return;
    }

    const getAndUpdateIssues = async () => {
      const issues = await getIssues(ISSUE_STATE.Open);
      setIssues(issues!);
    };
    getAndUpdateIssues();
  }, [repositories]);

  if ((!repositories?.length && !issues?.length) || !issues?.length) {
    return (
      <div className="mt-36">
        <TextField text={'저장된 레포가 없어서 이슈를 불러올 수 없어요!'} />
      </div>
    );
  }

  return (
    <div>
      {renderIssues(issues, currPage)?.map((issue, idx) => (
        <IssueCard key={`issue-${idx}`} issue={issue} />
      ))}
      <Pagination
        length={issues.length}
        limit={LIMIT}
        currPage={currPage}
        updateCurrPage={updateCurrPage}
      />
    </div>
  );
};

const LIMIT = 5;
const renderIssues = (issues: Issue[], page: number): Issue[] => {
  const START_NUMBER = LIMIT * (page - 1);
  return issues.slice(START_NUMBER, START_NUMBER + LIMIT);
};
