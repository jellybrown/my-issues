import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  path: string;
  active: boolean;
};

export const Menu = ({ name, path, active }: Props) => {
  return (
    <li className="flex items-center">
      <Link
        className={`${
          active ? MENU_STYLE.active : MENU_STYLE.inactive
        } flex items-center justify-center text-base inline-block w-[4rem]`}
        to={path}
      >
        {name}
      </Link>
    </li>
  );
};

const MENU_STYLE = {
  active: 'font-medium text-slate-300',
  inactive: 'text-slate-400',
};
