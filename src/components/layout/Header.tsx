import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SearchBar } from '@/components/layout/SearchBar';
import { Menu } from '@/components/layout/Menu';
import { PATH } from '@/constants';

export const Header = () => {
  const [isActiveSearchBar, setIsActiveSearchBar] = useState(false);

  const onToggleActiveSearchBar = () => {
    setIsActiveSearchBar(prev => !prev);
  };

  const location = useLocation();

  const isCurrent = (path: string) => {
    const urlMid = getMid(location.pathname);
    const pathMid = getMid(path);
    return pathMid === urlMid;
  };

  return (
    <div className="flex justify-between align-center bg-primary px-10 py-8 min-h-[80px]">
      <ul className="flex gap-5 w-1/3">
        {MENUS.map((menu, idx) => (
          <Menu
            key={`menu-${idx}`}
            name={menu.name}
            path={menu.path}
            active={isCurrent(menu.path)}
          />
        ))}
      </ul>
      <div className="flex-1">
        <SearchBar isActive={isActiveSearchBar} onToggleActive={onToggleActiveSearchBar} />
      </div>
    </div>
  );
};

const MENUS = [
  {
    name: '이슈',
    path: PATH.Issues,
  },
  {
    name: '저장소',
    path: PATH.Favorites,
  },
];

const getMid = (url: string) => {
  let result = '';
  const match = url.match(/[^/]*$/);

  if (match && match[0]) {
    result = match[0];
  }
  return result;
};
