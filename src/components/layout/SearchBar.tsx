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
    <div className="flex items-center h-[4rem]">
      <div className="flex-1 mr-5">
        {isActive && (
          <Input
            placeholder={'저장소 검색...'}
            value={keyword}
            onChangeInput={handleChangeKeyword}
          />
        )}
      </div>
      <button className="w-7 h-7" onClick={onSearchKeyword}>
        <MagnifyingGlassIcon className="text-slate-400 " />
      </button>
    </div>
  );
};
