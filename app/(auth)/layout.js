import React from 'react'

export default function layout({children}) {
  return (
    <>
    <div className='flex justify-center pt-15 pb-5'>
        {children}
    </div>
    </>
  )
}
