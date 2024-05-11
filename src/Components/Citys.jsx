import React, { useState } from 'react';
import { backgrounds, data } from './data';
import Selceted from './Selected';
import '../App.css';

export default function Citys() {
    const[selectedCity,setCety]=useState(null)
    const cities = [];

    while (cities.length < 4) {
        const i = Math.floor(Math.random() * data.length);
        const city = data[i];
        if (!cities.some(c => c.title === city.title)) {
            cities.push(city);
        } 
    }
//<img className='cityIamge' src={city.image} alt="" />

    return (
        <div className='CitySection'>
            <h1>Moroccan tourism</h1>
            <div className="cities-container">
                {cities.map(city => (
                    <div key={city.id} className='City' style={{backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.50)  5%, transparent 70%),
                    url(${city.image})`}} onClick={()=>{return(setCety(city))}}>
                        
                        <h3 className='name'>{city.city}</h3>
                        <h4 className='titleCity'>{city.title}</h4>
                    </div>
                ))}
            </div>
            {selectedCity&&
            <div className='selectedCity'>
                    <div className='X-container' onClick={()=>setCety(null)}>
                       <i class="fa-solid fa-x"></i>
                    </div>
                <Selceted selectedCity= {selectedCity}/>
            </div>}
               
        </div>
    );
}
