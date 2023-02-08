const Footer=({count, data, goToNextHandler, goToPreviousHandler })=>{
    console.log(count);
    function nxtClickHandler(){
        if(count >= data.length-1) {
            goToNextHandler(data.length-1);
        } else{
            goToNextHandler(++count);
        }
        
    }
    function prevClickHandler(){
        if(count < 1) {
            goToPreviousHandler(0);
        } else {
            goToPreviousHandler(--count);
        }        
    }

    return(
        <footer className="details-page-footer">
            <div className="footer-title-div">
                <p className="footer-title">{data[count].name}</p>
                <p className="footer-artist">{data[count].artist.name}</p>
            </div>
            <div className="footer-btn-div">
                <span className="footer-left-btn" onClick={prevClickHandler}>
                    <i className="fas fa-long-arrow-left"></i>
                </span>
                <span className="footer-right-btn" onClick={nxtClickHandler}>
                    <i className="fas fa-long-arrow-right"></i>
                </span>
            </div>
        </footer>
    )
}

export default Footer;