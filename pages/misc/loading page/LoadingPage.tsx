import React from 'react'
import './Loadingpage.css'

const LoadingPage = () => {
  return (
    <div className="loading-page" style={{ display:'flex', alignItems:'center', flexDirection:'column', gap:'20px' }}>
        <h1 className="loading-titles" style={{ color:'crimson' }}>Loading..</h1>
        <div className="spinner"></div>
    </div>
  )
}

export default LoadingPage