import React, { Suspense } from 'react'

export default function layout({children}) {
  return (
    <div className='mx-auto w-full'>
        <Suspense fallback = {<center><span className='mx-auto'>Loading...</span></center>}>
            {children}
        </Suspense>
    </div>
  )
}
