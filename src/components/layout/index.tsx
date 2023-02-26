import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header';

export const Layout = () => {
  return (
    <div>
      <Header />
      <div className="p-10">
        <Outlet />
      </div>
    </div>
  );
};
