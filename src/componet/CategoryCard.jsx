import React from 'react'
import { Link, useNavigate } from 'react-router'
import imgag from '../assets/image.png'
import imgag2 from '../assets/image.jpg'
import imgag3 from '../assets/image.webp'
import imgag4 from '../assets/image2.webp'
const categories = [
    { name: "Pets", image: imgag },
    { name: "Pet Food", image: imgag2 },
    { name: "Accessories", image: imgag4 },
    { name: "Pet Care Products", image: imgag3 }
]
const CategoryCard = () => {
    const navigate = useNavigate()
    const handleClick = (categoryname) => {
        navigate(`/category-filtered-prduct/${categoryname}`)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 p-3 gap-4 mt-10'>
            {
                categories.map((card) => (
                    <div onClick={() => handleClick(card.name)} className=" md:w-70 card shadow-md">
                        <figure className='md:w-70 h-35 rounded-lg object-cover hover:scale-105 transition-transform'>
                            <img className=' rounded-md'
                                src={card.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl">{card.name}</h2>
                            {/* <div className="card-actions justify-end">
                                <Link className='btn bg-pink-500' to={``}>See Details</Link>
                            </div> */}
                        </div>
                    </div>
                ))
            }
        </div>

    )
}

export default CategoryCard