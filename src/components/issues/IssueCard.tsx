import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/shared';
import { Issue } from '@/components/issues/types';
import { ISSUE_STATE } from '@/constants';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';

type Props = {
  issue: Issue;
};

export const IssueCard = ({ issue }: Props) => {
  return (
    <Link to={issue.html_url} target="_blank">
      <Card>
        <div className="truncate">
          <div className="flex items-center mb-5">
            <div
              className={`w-5 h-5 rounded rounded-full ${
                issue.state === ISSUE_STATE.Open ? 'bg-green' : 'bg-red'
              }`}
            />
            <h2 className="text-xl font-bold ml-5">{issue.title}</h2>
          </div>
          <div className="flex items-center h-8">
            {issue.commentCount > 0 && (
              <>
                <ChatBubbleOvalLeftIcon className="w-7 mr-1" />
                <span>{issue.commentCount}개의 댓글</span>
              </>
            )}
          </div>
          <div>
            <h3 className="text-base mb-1">{`${issue.owner}/${issue.repo}`}</h3>
            <span className="text-sm">{issue.created_at}, </span>
            <span className="text-sm">{issue.created_by}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};
