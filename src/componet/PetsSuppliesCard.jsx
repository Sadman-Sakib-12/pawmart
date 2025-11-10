import React from 'react'
import { Link } from 'react-router'

const PetsSuppliesCard = ({model}) => {
     const{category,date,description ,email,image,location,name,price}=model
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className='w-96 h-60 p- object-cover'>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{category}</p>
                <p>{description}</p>
                <p>{location}</p>
                <p>{price}</p>
                <div className="card-actions justify-end">
                    <Link className="btn btn-primary">See Details</Link>
                </div>
            </div>
        </div>
    )
}

export default PetsSuppliesCard