import React from 'react'

// Dynamic routes data passed to new route as params
const EventDetails = async({params}) => {
 const {id} = await params

 console.log("CONSOLE :",id);
 

  return (
    // <div>EventDetails: {title}</div>
    <div>EventDetails: {id} </div>
  )
}

export default EventDetails