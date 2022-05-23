import React, {useState, useEffect} from 'react'

const Information = ({items, loading}) => {
    console.log(items)
    // const[timer, setTimer] = useState(items.remainingTimer);
    // let date = Date.now();
    // console.log(date)


  return loading ? (<h1>Loading!</h1>) : (
      <section>
          <h1>Current Map</h1>
        <p>{items.map}</p>
        <img height="250px" width="450px" src={items.asset} alt="img"/>
      </section>
  )
}

export default Information