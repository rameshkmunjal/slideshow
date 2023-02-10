import './SlideshowPage.css';
import {useState} from 'react';
import DB from '../data.json';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SlideshowPage=({slideNumber, slideshowBtnHandler})=>{ 
    const baseURL=window.location.origin+'/slideshow';
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
                        <img src={baseURL + currentSlide.images.hero.large } alt={currentSlide.name} />                    
                    </div>
                    <div className="details-heading-div">
                        <div className="heading-div">
                            <h2>{currentSlide.name}</h2>
                            <p>{currentSlide.artist.name}</p>
                        </div>
                        <div className="artist-img-div">
                            <img src={baseURL + currentSlide.artist.image}  alt={currentSlide.artist.name}/>
                        </div>
                        
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