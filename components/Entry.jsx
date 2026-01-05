
function Entry(props) {
    console.log(props.image)
    //return (
    // <>
    //     <article className='journal-entry'>
    //         <div className="main-image-container">
    //             {<img className="main-image" src={props.imageData.img} alt={props.imageData.alt} />}
    //         </div>
    //         <div className="div-text-content">
    //             <img src='/images/marker.png' alt='map-marker-icon' />
    //             <span className="country"> {props.country} </span>
    //             {<a href={props.googleMapsLink} > View on Google Maps. </a>}
    //             <h2> {props.title} </h2>
    //             <p> {props.dates} </p>
    //             <p>  {props.text} </p>
    //         </div>
    //     </article >
    // </>
    //)
    return (
        <article className='journal-entry'>
            <div className="main-image-container">
                {<img className="main-image" src={props.image.src} alt={props.image.alt} />}
            </div>
            <div className="div-text-content">
                <img src='/images/marker.png' alt='map-marker-icon' />
                <span className="country"> {props.country} </span>
            </div>
        </article >
    )


}
export default Entry