import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import { rapServ } from "../../services/rapmovieSer";
import moment from "moment";

const TabMovieItem = ({ maHeThongRap }) => {
  const [lichChieu, setLichChieu] = useState([]);
  useEffect(() => {
    rapServ
      .getAllLichChieuHeThong(maHeThongRap)
      .then((res) => {
        console.log(res);
        setLichChieu(res.data.content);
      })
      .catch((orro) => {});
  }, [maHeThongRap]);
  const renderTabMovieItem = () => {
    return lichChieu[0]?.lstCumRap.map((item, index) => {
      return {
        label: (
          <div className="text-left w-80 ">
            <p>{item.tenCumRAp}</p>
            <p className="truncate...">{item.diaChi}</p>
          </div>
        ),
        key: index,
        children: (
          <div className="space-y-5">
            {item.danhSachPhim.map((item, index) => {
              if (item.dangChieu) {
                return (
                  <div className="flex space-y-5" key={index}>
                    <div className="w-2/12">
                      <img src={item.hinhAnh} alt="" />
                    </div>
                    <div className="w-10/12">
                      <h3>{item.tenPhim}</h3>
                      {item.lstLichChieuTheoPhim
                        .slice(0, 5)
                        .map((suatChieu, index) => {
                          return (
                            <p>
                              {moment(suatChieu.ngayChieuGioChieu).format(
                                "DD/MM/YYYY, h:m"
                              )}
                            </p>
                          );
                        })}
                    </div>
                  </div>
                );
              }
            })}
          </div>
        ),
      };
    });
  };
  return (
    <Tabs
      tabPosition="left"
      style={{ maxHeight: "400px", OverFlowy: "auto" }}
      items={renderTabMovieItem()}
    />
  );
};

export default TabMovieItem;
