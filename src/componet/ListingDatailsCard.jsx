import { Link, useLoaderData } from "react-router"

const ListingDatailsCard = () => {
     const data=useLoaderData()
     const model=data.result
     console.log(data)
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
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-1 items-center bg-yellow-100  rounded py-1 px-2'>
                            <p className=''>{model.email}</p>
                        </div>
                        <p className='bg-gray-200  rounded py-1 px-5'> {model.price}</p>
                        <p className='bg-gray-200  rounded py-1 px-5'>{model.location}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link className="btn btn-primary">Order</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingDatailsCard