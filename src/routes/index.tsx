import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { Issues } from '@/pages/Issues';
import { Repositories } from '@/pages/Repositories';
import { Favorites } from '@/pages/Favorites';
import { PATH } from '@/constants';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path={PATH.Home} element={<Navigate to={`${PATH.Issues}`} />} />
      <Route path={PATH.Issues} element={<Issues />} />
      <Route path={PATH.Favorites} element={<Favorites />} />
      <Route path={`${PATH.Repositories}`} element={<Repositories />} />
    </Route>
  )
);
