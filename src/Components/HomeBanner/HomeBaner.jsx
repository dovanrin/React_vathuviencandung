import React, { useEffect,useState } from 'react'
import { Carousel } from 'antd';
import { movieServ } from '../../services/movieServices';
// import React, {useEffect,} from 'react'

// import axios from 'axios';
// import { https } from '../services/config';

const HomeBaner = () => {
    const [banner, setBanner] = useState([])
    const getAllBanner= async()=>{
        // const res = await axios ({
        //     mothod:"GET",
        //     url:"https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner",
        //     headers: {
        //         TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwNyIsIkhldEhhblN0cmluZyI6IjE5LzEyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTcwMjk0NDAwMDAwMCIsIm5iZiI6MTY3OTg1MDAwMCwiZXhwIjoxNzAzMDkxNjAwfQ.28D2Nfp6Hy4C5u8pvZDIxH2pzlYoKIqgfsJLI_Dque4",
        //     },
        // });
        const res = await movieServ.getAllBanner()
        console.log(res)
       setBanner(res.data.content)    
    }
    useEffect(()=>{
        getAllBanner();
    },[])
  return (
   
<Carousel>
      {banner.map((banner,index)=>{
        return (
            <div key={index} className='h-100vh'>
                <img className='h-full w-full object-cover' src={banner.hinhAnh} alt=''/>
            </div>
        )
      })}
    </Carousel>
   
  )
}

export default HomeBaner