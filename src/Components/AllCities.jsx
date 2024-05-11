import { data } from "./data";
import '../App.css'
import { useState } from "react";
import Selceted from "./Selected";

export default function AllCities (){
    const[selectedCity,setCity]=useState(null)
    
    return (
        <>
        <div className="AllCities">   
             {data.map(city => (
                    <div key={city.id} className='City2' style={{backgroundImage:`linear-gradient(0deg, rgba(0, 0, 0, 0.50)  5%, transparent 70%),
                    url(${city.image})`}}  onClick={()=>{return(setCity(city))}}>
                        
                        <h3 className='name2'>{city.city}</h3>
                        <h4 className='titleCity2'>{city.title}</h4>
                    </div>
                ))}
        </div>
        {selectedCity&&
            <div className='selectedCity'>
                    <div className='X-container' onClick={()=>setCity(null)}>
                       <i class="fa-solid fa-x"></i>
                    </div>
                <Selceted selectedCity= {selectedCity}/>
            </div>}
        </>
    )
}