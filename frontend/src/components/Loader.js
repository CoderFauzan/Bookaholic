import React from 'react'

export default function Loader() {
    return (
        <div className='mt-5'>
            <div className="spinner-border mt-5" role="status" style={{height:'100px' , width:'100px' , marginTop:'100px'}}>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    )
}
