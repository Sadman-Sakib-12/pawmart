import { use, useState } from "react"
import { Link, useLoaderData } from "react-router"
import { AuthContext } from "../context/AuthContext"
import OrderModel from "./OrderModel"

const ListingDatailsCard = () => {
    const data = useLoaderData()
    const model = data.result
    // const { user } = use(AuthContext)
    const [order, setOrder] = useState(false)
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


                    <div>
                        <div className="card-actions  justify-end">

                            {/* The button to open modal */}
                            <a href="#my_modal_8" onClick={() => setOrder(true)} className="btn">Order</a>


                            {/* Put this part before </body> tag */}
                            <div className="modal   " role="dialog" id="my_modal_8">
                                <div className="modal-box">
                                    {
                                        order && <OrderModel setOrder={setOrder} model={model} />
                                    }
                                    <div className="modal-action">
                                        <a href="#" className="btn">Cancel</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingDatailsCard