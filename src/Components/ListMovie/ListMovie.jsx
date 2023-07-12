import React, { useEffect, useState } from "react";
import { movieServ } from "../../services/movieServices";
import "./listmovie.scss";

import { NavLink } from "react-router-dom";
import { Button } from "antd";
const ListMovie = () => {
  const [movie, setMoviea] = useState([]);
  useEffect(() => {
    movieServ
      .getAllMovie()
      .then((result) => {
        setMoviea(result.data.content);
      })
      .catch((oros) => {});
  });
  return (
    <div className="max-w-screen-xl mx-auto py-10">
      <h2 className="text-3xl font-bold text-center text-red-700">
        Danh Sách Phim
      </h2>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {movie.map((item, index) => {
          return (
            <div className="movie_item" key={index}>
              <img
                src={item.hinhAnh}
                alt=""
                className="h-60 w-full object-cover"
              />
              <div className="text my-3">
                <h3 className="font-bold">
                  <span className="bg-orange-700 text-white py-1 px-2 rounded-md mr-4">
                    C18
                  </span>
                  {item.tenPhim}
                </h3>
                <p className="line-clamp-3 mt-2">{item.moTa}</p>
                <NavLink
                  className="w-full inline-block "
                  to={`/detail/${item.maPhim}`}
                >
                  <button
                    type="primary"
                    danger
                    className="w-full text-lg h-10 "
                  >
                    Xem Ngay
                  </button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListMovie;
