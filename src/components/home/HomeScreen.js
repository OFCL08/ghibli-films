import React from "react";
import { useGetAllFilmsQuery } from './api/HomeApi'

const HomeScreen = () => {
  const { data, isLoading } = useGetAllFilmsQuery();
  console.log('data', data);

  return (
    <div>
      <p>HOLO</p>
    </div>
  );
};

export { HomeScreen };
