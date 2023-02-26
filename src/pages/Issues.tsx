import React, { useCallback, useEffect, useState } from 'react';
import { githubService } from '@/apis';
import { extractIssues, requestPromises } from '@/utils';
import { useRepository } from '@/context/repository/RepositoryContext';
import { Issue, IssueState } from '@/components/issues/types';
import { ISSUE_STATE } from '@/constants';
import { IssueCard } from '@/components/issues';
import { TextField } from '@Shared/TextField';

export const Issues = () => {
  const [issues, setIssues] = useState<Issue[] | null>(null);
  const { repositories } = useRepository();

  const getIssues = useCallback(async (state: IssueState | 'all') => {
    if (!repositories) return;

    const issueApis = repositories?.map(r => {
      const [owner, repo] = r.full_name.split('/');
      return githubService.getIssue({ owner, repo, state });
    });

    const data = await requestPromises(issueApis || []);
    const issue = extractIssues(data);
    setIssues(issue);
  }, []);

  useEffect(() => {
    if (!repositories?.length) {
      return;
    }
    getIssues(ISSUE_STATE.Open);
  }, [repositories]);

  if (!repositories?.length) {
    return (
      <div className="mt-36">
        <TextField text={'저장된 레포가 없어서 이슈를 불러올 수 없어요!'} />
      </div>
    );
  }
  return (
    <div>
      {issues?.map((issue, idx) => (
        <IssueCard key={`issue-${idx}`} issue={issue} />
      ))}
    </div>
  );
};
