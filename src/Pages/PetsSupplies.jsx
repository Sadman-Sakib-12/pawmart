import React from 'react'
import PetsSuppliesCard from '../componet/PetsSuppliesCard'
import { useLoaderData } from 'react-router'

const PetsSupplies = () => {
   const data=useLoaderData()
    console.log(data)
  return (
    <div className='grid grid-cols-3 mt-10'>
      {
        data.map(model => <PetsSuppliesCard model={model}/>)
      }
    </div>
  )
}

export default PetsSupplies