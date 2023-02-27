import React from 'react';

interface Props {
  length: number;
  limit: number;
  currPage: number;
  updateCurrPage: (page: number) => void;
}

export const Pagination = ({ length, limit, currPage, updateCurrPage }: Props) => {
  const pages = Math.ceil(length / limit);

  return (
    <ul className="flex justify-center p-4">
      {[...Array(pages)].map((_, i) => (
        <li className="p-3" key={`page-${i}`}>
          <button
            className={`${
              currPage === i + 1 ? PAGE_STYLE.active : PAGE_STYLE.inactive
            } text-base py-2 px-5 rounded rounded-full`}
            onClick={() => updateCurrPage(i + 1)}
          >
            {i + 1}
          </button>
        </li>
      ))}
    </ul>
  );
};

const PAGE_STYLE = {
  active: 'bg-slate-400',
  inactive: 'text-slate-400',
};
