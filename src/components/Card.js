const Card=({item, handleClick})=>{

    const clickHandler=(itemName)=>{
        console.log(itemName);
        handleClick(itemName);
    }

    return(
        <div className='imgDiv' onClick={()=>clickHandler(item.name)} >
            <img src={item.images.gallery} alt={item.name} />
            <h2 className="imageTitle">{item.name}</h2>
            <p className="imageArtist">{item.artist.name}</p>
        </div>
    );
}

export default Card;