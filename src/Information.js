import React from 'react'

const Information = (props) => {
    console.log(props)

  return props.Loading ? (<h1>Loading!</h1>) : (
      <section>
          {props.items.map(item => (
              <p>{item.current.map}</p>
          ))}
      </section>
  )
}

export default Information