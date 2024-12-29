import React from 'react'
import { FadeLoader } from 'react-spinners'

const Loading = () => {
  return (
    <div className='flex justify-center py-20'>
        <FadeLoader color='#0033E5' />
    </div>
  )
}

export default Loading
