import React from 'react'
import { useLoaderData } from 'react-router'

const CategoryCard = ({model}) => {
    const{category,date,description ,email,image,location,name,price}=model
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className='w-96 h-60 p- object-cover'>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default CategoryCard