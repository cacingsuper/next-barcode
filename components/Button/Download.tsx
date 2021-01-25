import React from 'react'

function Download({onClick}) {
    return (
        <div className='bg-indigo-900 mt-5 w-full py-2 rounded'>
          <button onClick={onClick} className="w-full bg-transparent" >Download</button>  
        </div>
    )
}

export default Download
