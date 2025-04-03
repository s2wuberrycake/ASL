import React from 'react'

//"flex p-0.5 hover:bg-stone-200 rounded
//transition-colors relative gap-2 w-full items-center">

const CurrentAccount = () => {
  return (
    <div className='border-b mb-4 mt-2 pb-4 border-stone-300'>
        <button className="card card-xs grid p-0.5 bg-zinc-900 relative transition-colors hover:bg-zinc-800 items-center gap-2 text-primary-content w-full">
            <div className="card-body items-center text-center">
                <h2 className="card-title">User1</h2>
            </div>
        </button>
    </div>
    
  )
}

export default CurrentAccount
