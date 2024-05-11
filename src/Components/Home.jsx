import '../App.css';
import { backgrounds } from './data';
import Counters from './Counters.jsx'
import Login from './Login.jsx';
import { useEffect, useState } from 'react';


 export default function Home(){
    const[login, setLogin]=useState(null);
    const [menu,setMenu]=useState(false);
    const i = Math.floor(Math.random()*backgrounds.length) ;
    const background = backgrounds[i];
    return (
        <div className="Home" style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.50)  20%, transparent 70%),
        url(${background})`}}>
            <ul className='NavBar'>
                <h2 className='logo'>MorccanTourism</h2>
                <ul className=' Nav-menu'>
                     <li>Home</li>
                     <li>Services</li>
                     <li>Tour</li>
                     <li>About</li>
                     <li>Contact</li>
                </ul>
               
                <ul className="Nav-loging">
                    
                    <ul>
                       <li>De</li>
                       <li>En</li>
                    </ul>
                    
                    <ul onClick={()=>setLogin(true)}>Login</ul>
                </ul>
                <div>
                {!menu?<i class="fa-solid fa-bars" onClick={()=>setMenu(true)} ></i>:<i onClick={()=>setMenu(false)} id='X' class="fa-solid fa-xmark"></i>}
                    {menu&& <ul className=' Nav-menu-mobile'>
                            <li>Home</li>
                            <li>Services</li>
                            <li>Tour</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>}</div>
                
            </ul>
            <h1 className='Home-title'>Extraordinary natural and<br/> cultural charm</h1>
            <div className="SearchArea">
                <input type="text" />
                <button id='search'>Search</button>
            </div>
            <Counters/>
            {login && <div><Login setLogin = {setLogin}/></div>}
        </div>
        
    )
 };