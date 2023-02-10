import './Header.css';
import {useState} from 'react';

const Header=({stopBtnHandler, startBtnHandler, showFlag})=>{
    const [flag, setFlag]=useState(showFlag);

    const startClickHandler=()=>{
        let slideshow=true; 
        setFlag(true);              
        startBtnHandler(slideshow);
    }

    const stopClickHandler=()=>{  
        let slideshow=false; 
        setFlag(false);            
        stopBtnHandler(slideshow);
    }

    if(!flag){
        console.log(flag);
        return(
            <header className="main-page-header">
                <h1>galleria</h1>
                <button 
                    className="start-slideshow-btn"
                     onClick={startClickHandler}
                >Start Slideshow</button>
            </header>
        )
    } else{
        console.log(flag);
        return(
            <header className="main-page-header">
                <h1>galleria</h1>
                <button 
                    className="start-slideshow-btn"
                     onClick={stopClickHandler}
                >Stop Slideshow</button>
            </header>
        )
    }
    
}

export default Header;

    
