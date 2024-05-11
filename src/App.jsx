import './App.css';
import Home from './Components/Home';
import Citys from './Components/Citys';
import Randomcity from './Components/RandomCity';
import ReviewCitys from './Components/ReviewCitys';
import Footre from './Components/Footre';

function App() {
  window.addEventListener('click',(e)=>{
    console.log(e.target.classList);
  })
  return (
    <>
       <Home/>
       <div className="App">
         <Citys/>
         <h1>One click for you</h1>
         <Randomcity/>
         <h1>Our most beautiful cities</h1>
         <ReviewCitys/>
       </div>   
         <Footre/>
    </>
  )
}

export default App;
