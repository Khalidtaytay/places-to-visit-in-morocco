import '../App.css'

export default function Selceted ({selectedCity}){

    return(
        <div>                    
                    <div className="h1h2">
                        <h1>{selectedCity.city},</h1>  
                         <h1>{selectedCity.title}</h1>
                    </div>

                    <div className='image-infos'>
                        <div className='selectedCity-image' style={{background:`url(${selectedCity.image})`}}></div>
                        <div className='selectedCity-infos'>
                         <p>{selectedCity.description}</p>
                         <p><span className='indo-info'>How to reach :</span> {selectedCity.howToReach}</p>
                         <p><span className='indo-info'>Visit for : </span>{selectedCity.visitfor}</p>
                         <p><span className='indo-info'>Tourist TouristAttractions :</span> {selectedCity.visitfor}</p>
                         <p><span className='indo-info'>things to do :</span> {selectedCity.ThingsToDo.map((n)=>{return(<li className='h1h2list'><i class="fa-solid fa-caret-right"></i>{n}</li>)})}</p>
                        </div>
                    </div>
                </div>
    )
}