import { use, useState } from "react"
import { Link, useLoaderData } from "react-router"
import { AuthContext } from "../context/AuthContext"

const ListingDatailsCard = () => {
    const data = useLoaderData()
    const model = data.result
    const [order, setOrder] = useState([])
    const { user } = use(AuthContext)
    const handleDownload= (e) => {
        e.preventDefault()
        const fromData = {
            name: e.target.name.value,
            category: e.target.category.value,
            location: e.target.location.value,
            image: e.target.image.value,
            price: e.target.price.value,
            description: e.target.description.value,
            date: new Date(),
            created_by: user.email
        }
        fetch('http://localhost:3000/order', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fromData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>
            <div className=" p-8 bg-base-100 w-[320px] md:w-[950px] mx-auto shadow-sm">
                <figure>
                    <img
                        className=' h-[200px] md:h-[400px] w-[300px] md:w-[800px]' src={model.image}
                        alt="Shoes" />
                </figure>
                <div className="">
                    <h2 className="card-title">{model.name}</h2>
                    <p>{model.description}</p>
                    <p>{model.category}</p>
                    {/* <div className='flex justify-between items-center'>
                        <div className='flex gap-1 items-center bg-yellow-100  rounded py-1 px-2'>
                            <p className=''>{model.email}</p>
                        </div>
                        <p className='bg-gray-200  rounded py-1 px-5'> {model.price}</p>
                        <p className='bg-gray-200  rounded py-1 px-5'>{model.location}</p>
                    </div> */}
                    <div className="card-actions justify-end">
                        <Link onClick={handleDownload} className="btn btn-primary">Order</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingDatailsCard