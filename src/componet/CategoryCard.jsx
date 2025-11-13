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
    //  const { category, date, description,_id, email, image, location, name, price } = model
    return (
        <div className='grid grid-cols-4 gap-2 mt-10'>
            {
                categories.map((card) => (
                    <div onClick={() => handleClick(card.name)} className="w-73 card shadow-md">
                        <figure className='w-73 h-35 rounded-lg object-cover'>
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