import React from 'react'

function Download({onClick}) {
    return (
        <div className='mt-5 w-full py-2 rounded'>
          <button onClick={onClick} className="w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" >Download</button>  
        </div>
    )
}

export default Download
