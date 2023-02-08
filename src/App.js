import './App.css';
import {useState} from 'react';
import HomePage from './Pages/HomePage';
import SlideshowPage from './Pages/SlideshowPage';



const App=()=>{
  const [isSlideshow, setIsSlideshow]=useState(false);
  const [slideNumber, setSlideNumber]=useState(0);
  
  function slideshowBtnHandler(slideshow){
    setIsSlideshow(slideshow);
    console.log(isSlideshow);
  }

  function updateSlideNumber(indexPos){
    console.log(indexPos);
    setIsSlideshow(true);
    setSlideNumber(indexPos);
  }
  
    //console.log(isSlideshow);
    if(!isSlideshow){
      return (
        <div className="wrapper">          
          <HomePage 
            slideshowBtnHandler={slideshowBtnHandler} 
            updateSlideNumber={updateSlideNumber} 
          />
        </div>
      );
    } else {
      return (
        <div className="wrapper">
          <SlideshowPage 
            slideshowBtnHandler={slideshowBtnHandler}
            slideNumber={slideNumber} />
        </div>
      );
  }
  
  
  
  
}

export default App;



/*
import Header from './components/Header';
const [isSlideshow, setIsSlideshow]=useState(false);
function slideshowBtnHandler(slideshow){
    setIsSlideshow(slideshow);
    console.log(isSlideshow);
  }

  //console.log(isSlideshow);
  if(!isSlideshow){
    return (
      <div className="wrapper">
        <Header startBtnHandler={slideshowBtnHandler}/>
        <HomePage  />
      </div>
    );
  } else {
    return (
      <div className="wrapper">
        <Header stopBtnHandler={slideshowBtnHandler} />
        <SlideshowPage  />
      </div>
    );
}
*/

