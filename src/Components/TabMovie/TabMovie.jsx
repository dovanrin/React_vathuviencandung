import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { rapServ } from "../../services/rapmovieSer";
import TabMovieItem from "./TabMovieItem";
const TabMovie = () => {
  const [heTHongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    rapServ
      .getAllHeThongRap()
      .then((res) => {
        console.log(res);
        setHeThongRap(res.data.content);
      })
      .catch((oro) => {
        console.log(oro);
      });
  }, []);
  const renderItemTab = () => {
    return heTHongRap.map((item, index) => {
      return {
        label: <img src={item.logo} alt="" className="w-10 h-10 bg-lime-600" />,
        key: index,
        children: <TabMovieItem maHeThongRap={item.maHeThongRap} />,
      };
    });
  };
  return (
    <div className=" max-w-screen-xl mx-auto">
      <Tabs tabPosition="left" items={renderItemTab()} />
    </div>
  );
};

export default TabMovie;
