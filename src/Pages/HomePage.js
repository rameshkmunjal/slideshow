import './HomePage.css';
import DB from '../data.json';
import {useState} from 'react';

import Header from '../components/Header';
import Card from '../components/Card';
import Modal from '../components/Modal';

const HomePage=({slideshowBtnHandler, updateSlideNumber})=>{
   const [isModal, setModal]=useState(false);
   const [index, setIndex]=useState(0);
   const data=DB;

   

   const handleClose = () => {
     setModal(false)
   }

   const showModal=(itemName)=>{
     const indexPosition = data.map(function(x) {return x.name; }).indexOf(itemName);
     setIndex(indexPosition);
     setModal(true);
   }

   const retrievedData=data.map(item=>{
        return <Card item={item} key={item.name} handleClick={showModal} />
   })

   if(isModal){
          return(
               <>
                    <Header startBtnHandler={slideshowBtnHandler} showFlag={false} />
                    <main className="container">{retrievedData}</main>
                    <Modal 
                         data={data} 
                         index={index} 
                         handleClose={handleClose} 
                         updateSlideIndex={updateSlideNumber}
                    />     
               </>
          )
   } else {
     return(
          <>
               <Header startBtnHandler={slideshowBtnHandler} showFlag={false} />
               <main className="container">{retrievedData}</main>
          </>
          
     )     
   }
   
}

export default HomePage;