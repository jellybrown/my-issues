import React, { ChangeEvent, useEffect, useState } from 'react';
import { Input } from '@Shared/Input';
import { Button } from '@Shared/Button';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants';

export const SearchBar = () => {
  const [keyword, setKeyword] = useState<string>('');
  const navigate = useNavigate();

  const handleChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onSearchKeyword = () => {
    navigate(`${PATH.Repositories}?q=${keyword}`);
  };

  return (
    <div>
      <Input placeholder={'저장소 검색...'} value={keyword} onChangeInput={handleChangeKeyword} />
      <Button text={'검색'} onClickBtn={onSearchKeyword} />
    </div>
  );
};
