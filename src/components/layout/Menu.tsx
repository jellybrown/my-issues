import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  name: string;
  path: string;
  active: boolean;
};

export const Menu = ({ name, path, active }: Props) => {
  return (
    <li className="w-25">
      <Link className={`${active && MENU_STYLE.active} text-base`} to={path}>
        {name}
      </Link>
    </li>
  );
};

const MENU_STYLE = {
  active: 'font-bold',
};
