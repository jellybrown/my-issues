import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import Issues from '@/pages/Issues';
import { PATH } from '@/constants';
import Repositories from '@/pages/Repositories';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={PATH.Home} element={<Navigate to={`${PATH.Issues}`} />} />
      <Route path={PATH.Issues} element={<Issues />} />
      <Route path={PATH.Repositories} element={<Repositories />} />
      <Route path={`${PATH.Repositories}/search`} element={<Repositories />} />
    </Route>
  )
);
