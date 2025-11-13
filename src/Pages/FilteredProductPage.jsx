import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

const FilteredProductPage = () => {
  const { categoryName } = useParams()
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(`https://pawmart-server-gray.vercel.app/category-filtered-product/${categoryName}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.result)
      })
  }, [categoryName])
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
      {
        products.map((item) => (
          <div className="card bg-base-100 w-85 mt-8 shadow-sm ">
            <figure className='w-85 h-60 object-cover hover:scale-105 transition-transform'>
              <img
                src={item.image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <Link className='btn w-full bg-pink-600 rounded-lg text-white' to={`/listing-details/${item._id}`}>See Details</Link>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default FilteredProductPage