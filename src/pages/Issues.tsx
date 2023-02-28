import React, { useCallback, useEffect, useState } from 'react';
import { githubService } from '@/apis';
import type { Issue, IssueState } from '@/components/issues/types';
import { IssueCard, IssueFilter } from '@/components/issues';
import { TextField, Pagination } from '@/components/shared';
import { useRepository } from '@/context/repository/RepositoryContext';
import { PATH } from '@/constants';
import { usePagination, useIssueFilter } from '@/hooks';
import { extractIssues, requestPromises } from '@/utils';

export const Issues = () => {
  const [issues, setIssues] = useState<Issue[] | null>(null);

  const { repositories } = useRepository();
  const { currIssueState, updateIssueFilter } = useIssueFilter();
  const { currPage, updateCurrPage } = usePagination({ path: PATH.Issues, initialPage: 1 });

  const getIssues = useCallback(
    async (state: IssueState | 'all') => {
      if (!repositories) return;

      const issueApis = repositories?.map(r => {
        const [owner, repo] = r.full_name.split('/');
        return githubService.getIssue({ owner, repo, state, page: currPage });
      });

      const data = await requestPromises(issueApis || []);
      const issue = extractIssues(data);
      return issue;
    },
    [repositories]
  );

  useEffect(() => {
    if (!repositories?.length) {
      return;
    }

    const getAndUpdateIssues = async () => {
      const issues = await getIssues(currIssueState);
      setIssues(issues!);
    };
    getAndUpdateIssues();
  }, [repositories, currIssueState]);

  if (!repositories?.length) {
    return (
      <div className="mt-36">
        <TextField text={'저장된 레포가 없어서 이슈를 불러올 수 없어요!'} />
      </div>
    );
  }

  return (
    <div>
      <IssueFilter currIssueState={currIssueState} updateIssueFilter={updateIssueFilter} />
      {issues && issues.length > 0 ? (
        renderIssues(issues, currPage)?.map((issue, idx) => (
          <IssueCard key={`issue-${idx}`} issue={issue} />
        ))
      ) : (
        <div className="mt-36">
          <TextField text={'내 저장소에 등록된 이슈가 없네요!'} />
        </div>
      )}
      <Pagination
        length={issues?.length || 0}
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
