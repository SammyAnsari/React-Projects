import React from 'react'
import { Bookmark } from 'lucide-react'


const Card = (props) => {
  return (
      <div className="card">
      <div className="top">
        <img src={props.logo} alt=''></img>
        <button>Save <Bookmark size={15} /></button>
        </div>
        <div className="center">
          <h3>{props.companyName}  <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
          <div className="center-bottom">
            <h4>{props.tag2}</h4>
            <h4>{props.jobType}</h4>
            </div>
        </div>
        <div className="bottom">
          <div>
            <h3>{props.pay}</h3>
            <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
          
        </div>
        </div>  
  )
}

export default Card
