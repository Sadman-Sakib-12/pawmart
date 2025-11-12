import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const FilteredProductPage = () => {
  const { categoryName } = useParams()
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch(`http://localhost:3000/category-filtered-product/${categoryName}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.result)
      })
  }, [categoryName])
  return (
    <div className='grid grid-cols-3 gap-3'>
      {
        products.map((item) => (
          <div className="card bg-base-100 w-96 shadow-sm">
            <figure className='w-96 h-60 p- object-cover'>
              <img
                src={item.image}
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                {/* <Link to={`/listing-details/${_id}`}>See Details</Link> */}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default FilteredProductPage