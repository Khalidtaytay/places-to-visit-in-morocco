import { data } from "./data";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import { useState } from "react";
import AllCities from "./AllCities";

export default function ReviewCitys(){
    const[AllCity,setAllCity]=useState(null)
    const Cities = [];
    while(Cities.length< data.length){
        const i = Math.floor(Math.random()*data.length);
        if(!Cities.some(c => c.title === data[i].title)){
            Cities.push(data[i])
        }
    }
    return(
        <>
            <style>
                 {`
                 .swiper-scrollbar {
                    position: absolute !important;
                    bottom: 0 !important;
                    z-index: 111 !important;
                    }
                    .swiper-scrollbar-drag {
                     background-color: red; /* Change to your desired color */
                 }
                 `}
             </style>
             <Swiper
                 className="ReviewCitys"
                   modules={[Navigation, Pagination, Scrollbar, A11y]}
                   spaceBetween={50}
                   slidesPerView={3}
                   navigation
                   pagination={{ clickable: true }}
                   scrollbar={{ draggable: true }}
                   onSwiper={(swiper) => console.log(swiper)}
                   onSlideChange={() => console.log('slide change')}
             >
                  <div className="ReviewCitys-Cityes">
                      {Cities.map((c) => {
                          return (
                              <SwiperSlide className="ReviewCitys-Cityes-CityItem" key={c.title} style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.50)  10%, transparent 70%),url(${c.image})` }}>
                                  <div className="review-infos">Discover {c.city},<span>{c.title}</span></div>
                              </SwiperSlide>
                          );
                      })}
                  </div>
            </Swiper>
            <div className="ReviewCitysAll">
                 
                 <button onClick={()=>{setAllCity(true)}}>View more <i class="fa-solid fa-circle-arrow-right"></i></button>
            </div>
            <div className="AllCity">
                
                {AllCity&&
                <div>
                       <div className='X-container2' onClick={()=>setAllCity(null)}>
                           <i class="fa-solid fa-x"></i>
                       </div>
                    <AllCities/>
                </div>}
            </div>
        </>
    )
}