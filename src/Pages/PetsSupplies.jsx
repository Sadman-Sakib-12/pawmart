import React, { useState } from 'react'
import PetsSuppliesCard from '../componet/PetsSuppliesCard'
import { useLoaderData } from 'react-router'

const PetsSupplies = () => {
  const data = useLoaderData()
  console.log(data)
  const [models, setModels] = useState(data)
  const [select, setSelect] = useState('')
  const handleSearch = (e) => {
    const category = e.target.value
    setSelect(category)
    if (!category) {
      setModels(data)
      return
    }
    fetch(`http://localhost:3000/category-filter/${category}`)
      .then(res => res.json())
      .then(data => {
        setModels(data.result)
      })
  }
  return (
    <div>
      <div className='mt-5 text-center'>

        <select
          value={select}
          onChange={handleSearch}
          name='category'
          required
          className='select  rounded-full focus:border-0 focus:outline-gray-200'>
          <option value="" disabled>Category Select</option>
          <option value=""> All Category </option>
          <option value="Pets">Pets</option>
          <option value="Pet Food">Pet Food</option>
          <option value="Accessories">Accessories</option>
          <option value="Pet Care Products">Pet Care Products</option>
        </select>
      </div>

      <div className='grid grid-cols-3 gap-4 mt-4'>

        {
          models.map(model => <PetsSuppliesCard model={model} />)
        }
      </div>
    </div>
  )
}

export default PetsSupplies