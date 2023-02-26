import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header';

export const Layout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <div className="flex-1 p-10 bg-gray-light-2">
        <Outlet />
      </div>
    </div>
  );
};
