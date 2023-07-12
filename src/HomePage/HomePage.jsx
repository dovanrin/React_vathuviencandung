import React, { useEffect, useState } from "react";
import HomeBaner from "../Components/HomeBanner/HomeBaner";
import ListMovie from "../Components/ListMovie/ListMovie";
import TabMovie from "../Components/TabMovie/TabMovie";
// import axios from 'axios';
// import { https } from '../services/config';

const HomePage = () => {
  return (
    <div>
      <HomeBaner />
      <ListMovie />
      <TabMovie />
    </div>
  );
};

export default HomePage;
