import React from 'react'
import placeholder from '../../assets/placeholder.png' // Adjust path based on file location

const CurrentAccount = () => {
	return (
		<div className='card card-border border-base-300 card-sm flex flex-col items-center justify-center p- gap-2'>
  <figure>
  <img src={placeholder} alt="Account Avatar" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Username</h2>
    <p>Superadmin account. All administrative priveleges is unlocked</p>
  </div>
</div>
		
	)
}

export default CurrentAccount

