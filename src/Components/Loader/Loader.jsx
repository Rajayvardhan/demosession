import React from 'react'
import loadings from './loading.gif'

const Loader = () => {
  return (
    <div className='text-center'>
        <img src={loadings} alt="loadings" style={{height:"150px",width:"200px"}} />
      </div>
  )
}

export default Loader
