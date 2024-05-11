import { useEffect, useState } from 'react'
import '../App.css'
export default function Counters(){
    const[count1 , setCount1]=useState(0) ;
    const[count2 , setCount2]=useState(0) ;
    const[count3 , setCount3]=useState(0) ;
    const[count4 , setCount4]=useState(0) ;
    
    useEffect(() => {
        function forCounters(c1,c2,c3,delay1,delay2,delay3,setCount){
            let count = 0;
            const interval1 = setInterval(() => {
                if (count >= c1) {
                    clearInterval(interval1);
                } else {
                    setCount(prevCount => prevCount + 1);
                    count+= 1; // Increment count separately
                }
            }, delay1);
            const interval2 = setInterval(() => {
                if (count >= c2) {
                    clearInterval(interval2);
                } else {
                    setCount(prevCount => prevCount + 1);
                    count+= 1; // Increment count separately
                }
            }, delay2);
            const interval3 = setInterval(() => {
                if (count >= c3) {
                    clearInterval(interval3);
                } else {
                    setCount(prevCount => prevCount + 1);
                    count+= 1; // Increment count separately
                }
            }, delay3);
    
            return () => {
                clearInterval(interval1)
                clearInterval(interval2);
                clearInterval(interval3);};
        }
        forCounters(250,500,700,1,2,10,setCount1);
       forCounters(5,null,null,1000,null,null,setCount2);
       forCounters(0,6,12,200,300,500,setCount3);
    }, []);
    return(
        <ul className="counters">
               <li className="counter1">
                   <div id='K'>{count1}K+</div>
                   <p>Total Cusomers</p>
               </li>
               <li className="counter1">
                   <div id='K'>{count2}+</div>
                   <p>Years Of Experience</p>
               </li>
               <li className="counter1">
                   <div id='K'>{count3}K+</div>
                   <p>Total Destinations</p>
               </li>
        </ul>
    )
}