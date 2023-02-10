import './Card.css';

const Card=({item, handleClick})=>{
    const baseURL=window.location.origin+'/slideshow';
    const clickHandler=(itemName)=>{
        console.log(itemName);
        handleClick(itemName);
    }

    return(
        <div className='imgDiv' onClick={()=>clickHandler(item.name)} >
            <img src={baseURL + item.images.gallery} alt={item.name} />
            <h2 className="imageTitle">{item.name}</h2>
            <p className="imageArtist">{item.artist.name}</p>
        </div>
    );
}

export default Card;