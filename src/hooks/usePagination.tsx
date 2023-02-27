import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

type Props = {
  path: string;
  initialPage: number;
};

export const usePagination = ({ path, initialPage }: Props) => {
  const [searchParams] = useSearchParams();
  const [currPage, setCurrPage] = useState(initialPage);
  const navigate = useNavigate();

  useEffect(() => {
    const page = searchParams.get('page');
    if (page) {
      setCurrPage(Number(page));
    }
  }, [searchParams.get('page')]);

  const updateCurrPage = (page: number) => {
    navigate(`${path}?page=${page}`);
  };

  return { currPage, updateCurrPage };
};
