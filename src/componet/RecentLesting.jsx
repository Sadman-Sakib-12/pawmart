import React from 'react'
import { Link } from 'react-router'

const RecentLesting = ({ model }) => {
  const { category, _id, email, image, location, name, price } = model
  return (
    <div className="card bg-base-100 w-96 shadow-sm mt-15">
      <figure className='w-96 h-60  object-cover'>
        <img
          src={image}
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <p>{name}</p>
        <h2 className="card-title">{category}</h2>
        <h2 className="card-title">{location}</h2>
        <h2 className="card-title">${price}</h2>
        <div className="card-actions justify-end">
          <Link className='btn w-full bg-pink-600 rounded-lg text-white' to={`/listing-details/${_id}`}>See Details</Link>
        </div>
      </div>
    </div>
  )
}

export default RecentLesting