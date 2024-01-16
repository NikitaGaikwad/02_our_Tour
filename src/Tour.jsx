import { useState } from "react"

const Tour = ({id, image, name, price, info, removeTour }) => {
    let [readMore, setReadMore] = useState(false);
    return (
        <div className='single-tour' >
            <img className="img" src={image} alt="" />
            <span className='tour-price'>${price}</span>
            <div className='tour-info'>
                <h5>{name}</h5>
                <p>{readMore?info: `${info.substring(0,200)}...` }
                <button className="info-btn" onClick={()=>setReadMore(!readMore)}>{readMore?' Read Less':'Read More'}</button>
                </p>
                <button className="btn btn-block delete-btn" onClick={()=>removeTour(id)}>Not Interested</button>
            </div>
            
        </div>
    )
}

export default Tour
