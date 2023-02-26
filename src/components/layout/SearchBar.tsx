import React from 'react';
import { Input } from '@Shared/Input';
import { Button } from '@Shared/Button';

export const SearchBar = () => {
  return (
    <div>
      <Input placeholder={'저장소 검색...'} />
      <Button text={'검색'} />
    </div>
  );
};
