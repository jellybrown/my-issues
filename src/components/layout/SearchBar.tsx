import React, { ChangeEvent, useState } from 'react';
import { Input } from '@Shared/Input';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

type Props = {
  isActive: boolean;
  onToggleActive: () => void;
};

export const SearchBar = ({ isActive, onToggleActive }: Props) => {
  const [keyword, setKeyword] = useState<string>('');
  const navigate = useNavigate();

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleSearchKeyword = () => {
    navigate(`${PATH.Repositories}?q=${keyword}`);
  };

  const onSearchKeyword = () => {
    keyword.length < 1 ? onToggleActive() : handleSearchKeyword();
  };

  return (
    <div className="flex justify-end items-center h-[4rem]">
      <div
        className={`max-w-4xl flex-1 mr-5 ease-in duration-300 origin-right ${
          isActive ? INPUT_STYLE.active : INPUT_STYLE.inactive
        }`}
      >
        <Input placeholder={'저장소 검색...'} value={keyword} onChangeInput={handleChangeKeyword} />
      </div>
      <button className="w-10 h-10" onClick={onSearchKeyword}>
        <MagnifyingGlassIcon
          className={`text-slate-400 ease-in duration-300 ${
            isActive ? 'opacity-1' : 'opacity-50'
          } `}
        />
      </button>
    </div>
  );
};

const INPUT_STYLE = {
  active: 'scale-x-100 opacity-100',
  inactive: 'scale-x-50 opacity-0',
};
