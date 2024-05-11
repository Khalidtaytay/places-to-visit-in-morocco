import { data } from "./data"
export default function Randomcity(){
    const i = Math.floor(Math.random()*data.length);
    const RandomCity = data[i];
    return(
        <div className="RandomCity">
            {
              <>
                   <div className="RandomCity-background" style={{backgroundImage: `linear-gradient(-45deg, rgba(0, 0, 0, 0.10)  100%, transparent 70%),
        url(${RandomCity.image})`}}></div>
                   <ul className="RandomCity-informations">
                       <li className="indo-random-info">{RandomCity.city}<br/>{RandomCity.title}</li>
                       <li className="indo-random-info"><span className="indo-info">Visit for :</span> {RandomCity.visitfor}</li>
                       <li className="indo-random-info"><span className="indo-info">Tourist Attractions :</span> {RandomCity.TouristAttractions}</li>
                       <li className="indo-random-info"><span className="indo-info">Thinks to do : </span> {RandomCity.ThingsToDo.map((n)=>{return(<li><i class="fa-solid fa-caret-right"></i> {n}</li>)})}</li>
                   </ul>
              </>
            }
        </div>
    )
}