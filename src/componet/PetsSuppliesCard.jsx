import React from 'react'
import { Link } from 'react-router'

const PetsSuppliesCard = ({ model }) => {
    const { category, _id, image, location, name, price } = model
    return (
        <div>
           

            <div className="card bg-base-100 w-80 md:w-96 shadow-sm">
                <figure className='w-80 md:w-96 h-60 p- object-cover hover:scale-105 transition-transform'>
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
        </div>
    )
}

export default PetsSuppliesCard