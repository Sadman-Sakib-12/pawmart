import React from 'react'

const MyListingCard = ({model}) => {
    const{image,created_by}=model
  return (
      <div className="card bg-base-100 w-96 shadow-sm">
            <figure className='w-96 h-60 p- object-cover'>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{created_by}</h2>
                <p></p>
                <div className="card-actions justify-end">
                   {/* <Link to={`/listing-details/${_id}`}>See Details</Link> */}
                </div>
            </div>
        </div>
  )
}

export default MyListingCard