import React from 'react'
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Footer } from 'antd/es/layout/layout';
import Foodter from '../Components/Foodter/Foodter';

const UserTemplate = () => {
  return ( <div className='flex flex-col min-h-screen justify-between'>
    <Header/>
  <Outlet/>
  <Foodter/>
 </div>
  );
};

export default UserTemplate;