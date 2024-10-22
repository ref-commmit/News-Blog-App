import React from 'react'
import image from "../assets/image.jpg"
const NewsItem = ({url,src ,description,title}) => {
  return (
    <div className="card d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px", }}>
    <img className="card-img-top" src={src?src:image}  alt="Card image cap" style={{height:"200px" , width:"325px"}} />
    <div className="card-body">
      <h5 className="card-title">{title?title.slice(0,50):Breaking }</h5>
      <p className="card-text">{description?description.slice(0,90):"National Hurricane Center data reports Tropical Storm Oscar, with a maximum sustained wind"}</p>
      <a href={url} className="btn btn-primary">Read more</a>
    </div>
  </div>
  

  )
}

export default NewsItem
