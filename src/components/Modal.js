import {useState, useEffect} from 'react';

export default function Modal({ data, index,  handleClose, updateSlideIndex }) {
  const baseURL=window.location.origin+'/slideshow';
  const [indexPos, setIndexPos]=useState(index);
  let i=index;
  useEffect(() => {
    const interval = setInterval(() => {      
      i=++i % data.length;
      setIndexPos(i);
    }, 2000);
    return () => clearInterval(interval);
  }, [i]);

  function closeBtnHandler(){
    handleClose(indexPos);
  }
  
  function updateIndexHandler(indexPosition){
    updateSlideIndex(indexPosition);
  }

  return (
    <div className="modal-backdrop">      
      <div className="modal">
        <button className="modal-close-btn" onClick={closeBtnHandler}>Close</button>
        <div>
          <img 
            src={baseURL + data[indexPos].images.hero.small} 
            alt={data[indexPos].name} 
            onClick={()=>updateIndexHandler(indexPos)}
            />
        </div>        
      </div>
    </div>
  )
}