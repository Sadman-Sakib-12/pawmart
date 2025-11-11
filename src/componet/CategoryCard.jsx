import React from 'react'
import { Link } from 'react-router'
import imgag from '../assets/image.png'

const CategoryCard = () => {
    //  const { category, date, description,_id, email, image, location, name, price } = model
    return (
        <div className='grid grid-cols-4 gap-6 mt-10'>
            <div className="w-80 card shadow">
                <figure className='w-80 h-40 rounded-lg object-cover'>
                    <img className=' rounded-md'
                        src={imgag}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">Pets</h2>
                    <div className="card-actions justify-end">
                        <Link className='btn bg-pink-500' to={``}>See Details</Link>
                    </div>
                </div>
            </div>
            <div className="w-80 card shadow">
                <figure className='w-80 h-40 rounded-lg object-cover'>
                    <img className=' rounded-md'
                        src={imgag}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl">Pet Food</h2>
                    <div className="card-actions justify-end">
                        {/* <Link to={`/listing-details/${_id}`}>See Details</Link> */}
                    </div>
                </div>
            </div>
            <div className="w-80 card shadow">
                <figure className='w-80 h-40 rounded-lg object-cover'>
                    <img className=' rounded-md'
                        src={imgag}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl"> Accessories</h2>
                    <div className="card-actions justify-end">
                        {/* <Link to={`/listing-details/${_id}`}>See Details</Link> */}
                    </div>
                </div>
            </div>
            <div className="w-80 card shadow">
                <figure className='w-80 h-40 rounded-lg object-cover'>
                    <img className=' rounded-md'
                        src={imgag}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-4xl"> Pet Care Products</h2>
                    <div className="card-actions justify-end">
                        {/* <Link to={`/listing-details/${_id}`}>See Details</Link> */}
                    </div>
                </div>
            </div>

           

        </div>

    )
}

export default CategoryCard