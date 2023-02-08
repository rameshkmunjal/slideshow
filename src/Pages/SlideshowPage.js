import {useState} from 'react';
import DB from '../data.json';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SlideshowPage=({slideNumber, slideshowBtnHandler})=>{ 
    const data=DB;
    const [index , setIndex]=useState(slideNumber);
    const [currentSlide, setCurrentSlide]=useState(data[index]);
    
    
    
    function goToNext(i){
        //console.log(i);
        setIndex(i);
        setCurrentSlide(data[i]);
    }
    function goToPrevious(i){
        //console.log(i);
        setIndex(i);
        setCurrentSlide(data[i]);
    }

   return(    
        <>
            <Header stopBtnHandler={slideshowBtnHandler} showFlag={true}/>    
            <main className="details-page-container">
                <div className="slide-div">
                    <div className="slide" key={currentSlide.name}>
                    <div className="details-img-div">
                        <img src={currentSlide.images.hero.large } alt={currentSlide.name} />                    
                    </div>
                    <div className="details-heading-div">
                        <h2>{currentSlide.name}</h2>
                    </div>
                    <div className="details-page-description">
                        <p>{currentSlide.description}</p>
                    </div>
            </div>
                </div>                               
            </main>
            <Footer 
                    count={index} 
                    data={data} 
                    goToNextHandler={goToNext} 
                    goToPreviousHandler={goToPrevious}
            /> 
        
        </>
             
   )

}

export default SlideshowPage;