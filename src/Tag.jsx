import React from 'react'
import { useParams } from 'react-router-dom'
const Tag = () => {
  const params = useParams();
  return (
    
    <div>
      <h1>
        {params.userName}
      </h1>
    </div>
  )
}

export default Tag