import React from 'react'
import { Link, useNavigate } from 'react-router'
import imgag from '../assets/image.png'
const categories = [
    { name: "Pets", image: imgag },
    { name: "Pet Food", image: imgag },
    { name: "Accessories", image: imgag },
    { name: "Pet Care Products", image: imgag }
]
const CategoryCard = () => {
    const navigate=useNavigate()
    const handleClick=(categoryname)=>{
        navigate(`/category-filtered-prduct/${categoryname}`)
    }
    //  const { category, date, description,_id, email, image, location, name, price } = model
    return (
        <div className='grid grid-cols-4 gap-6 mt-10'>
            {
                categories.map((card) => (
                    <div onClick={()=>handleClick(card.name)} className="w-80 card shadow">
                        <figure className='w-80 h-40 rounded-lg object-cover'>
                            <img className=' rounded-md'
                                src={card.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-4xl">Pets</h2>
                            <div className="card-actions justify-end">
                                <Link className='btn bg-pink-500' to={``}>See Details</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        )
}

export default CategoryCard