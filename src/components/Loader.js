import React from 'react'
// import spinner from '../../img/spinner.gif'
import spinner from "../img/spinner.gif";

const Loader = () => {
  return (
    <img
      src={spinner}
      style={{ width: '200px', height:'50vh', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
  )
}

export default Loader;