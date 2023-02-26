import React from 'react';
import { Card } from '@Shared/Card';
import { Issue } from '@/components/issues/types';
import { Link } from 'react-router-dom';

type Props = {
  issue: Issue;
};

export const IssueCard = ({ issue }: Props) => {
  return (
    <Link to={issue.html_url} target="_blank">
      <Card className="hover:bg-gray-light">
        <div className="truncate">
          <h2 className="text-sm font-medium">{issue.title}</h2>
          <span>{issue.created_by}</span>
        </div>
      </Card>
    </Link>
  );
};
