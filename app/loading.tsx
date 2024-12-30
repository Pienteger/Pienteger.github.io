import { Metadata } from 'next';
import React from 'react'
import { FadeLoader } from 'react-spinners'

export const metadata: Metadata = {
  title: "Loading... - Pienteger®",
  description: "Please wait while we load the content for you. Innovative solutions are just a moment away.",
};

const Loading = () => {
  return (
    <div className='flex justify-center py-20'>
        <FadeLoader color='#0033E5' />
    </div>
  )
}

export default Loading
