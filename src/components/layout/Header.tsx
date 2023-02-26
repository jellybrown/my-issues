import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '@/constants';
import { SearchBar } from '@/components/layout/SearchBar';

export const Header = () => {
  return (
    <div className="flex border border-b-1 px-10 py-8">
      <ul className="flex flex-1 gap-5">
        <li className="w-25">
          <Link className="text-base" to={PATH.Issues}>
            이슈
          </Link>
        </li>
        <li>
          <Link className="text-base" to={PATH.Repositories}>
            저장소
          </Link>
        </li>
      </ul>
      <div>
        <SearchBar />
      </div>
    </div>
  );
};
