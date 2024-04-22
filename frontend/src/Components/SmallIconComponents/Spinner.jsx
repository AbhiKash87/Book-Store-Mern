// import React from 'react'
import { FiLoader } from 'react-icons/fi';
function Spinner() {
  return (
    <div className='animate-ping w-16 h-16 m-8 rounded-full bg-sky-600 '> 
        <FiLoader className="icon-spin" />
     </div>
  )
}

export default Spinner