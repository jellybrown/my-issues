import React from 'react';
import { Card } from '@Shared/Card';
import { Issue } from '@/components/issues/types';
import { Link } from 'react-router-dom';
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';

type Props = {
  issue: Issue;
};

export const IssueCard = ({ issue }: Props) => {
  return (
    <Link to={issue.html_url} target="_blank">
      <Card>
        <div className="truncate">
          <h2 className="text-xl font-bold mb-5">{issue.title}</h2>
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
