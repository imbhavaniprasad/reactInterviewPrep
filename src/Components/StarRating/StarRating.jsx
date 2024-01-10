import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import "./index.css"
const StarRating = () => {
const [review,setReview]=useState(0);
const [hover,setHover]=useState(0);
  return (
    <div className='container'>
{[...Array(5)].map((star,idx)=>{
return <FaStar onClick={()=>setReview(idx+1)} onMouseEnter={() => setHover(idx+1)}
onMouseLeave={() => setHover(review)} key={idx} style={{fontSize:'4em'}} className={`${idx<(hover||review)?"active" : ""}`}/>
})
}
    </div>
  )
}

export default StarRating