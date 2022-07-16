import React from 'react'
import './loader.css'
import { Audio } from 'react-loader-spinner'
import { CubeSpinner  } from "react-spinners-kit";

function loader() {
    return (
        <div className='container contain_loader'>
            <div className='loader'>
                <CubeSpinner
                   size={30}
                   color="#FFFFFF"
    
                /></div>
        </div>
    )
}

export default loader