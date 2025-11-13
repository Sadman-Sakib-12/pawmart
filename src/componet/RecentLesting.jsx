import React from 'react'
import { Link } from 'react-router'
import Loading from '../Pages/Loading'

const RecentLesting = ({ model }) => {

  const { category, _id,loading,image, location, name, price } = model
  if (loading) {
    return <Loading />
  }
  return (
    <div className="card bg-base-100 w-80 md:w-96 shadow-sm mt-10">
      <figure className='w-70 h-60  object-cover hover:scale-105 transition-transform'>
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