import React from "react"

function Gym(props) {
   return (
       <div>
           <h3 style={{color: !props.rating && "#888888"}}>Gym Name:{props.name}</h3>
           <h3 style={{display: !props.rating && "none"}}>Rating:{props.rating}</h3>
           <hr/>
       </div>
   )
}

export default Gym
