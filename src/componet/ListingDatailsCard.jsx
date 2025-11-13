import { use, useState } from "react"
import { Link, useLoaderData } from "react-router"
import { AuthContext } from "../context/AuthContext"
import OrderModel from "./OrderModel"

const ListingDatailsCard = () => {
    const data = useLoaderData()
    const model = data.result
    const [order, setOrder] = useState(false)
    return (
        <div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-14 mt-10 md:mt-10 rounded-lg bg-base-100 h-[700px] md:mb-0 mb-4 md:p-0 p-4 md:h-[350px] w-[320px] md:w-[650px] mx-auto shadow-sm">
                <figure >
                    <img
                        className=' h-[300px] md:h-[300px] p- rounded-lg w-[300px] md:w-[300px]' src={model.image}
                        alt="Shoes" />
                </figure>
                <div className=" ">
                    <div className="space-y-2 mt-10">
                        <h2 className="card-title">{model.name}</h2>
                        <p>{model.category}</p>
                        <p className=' rounded '>{model.location}</p>

                        <div className='space-y-2'>
                            <p className=''>{model.created_by}</p>
                            <p>{model.description}</p>
                            <p className=' rounded '>${model.price}</p>

                        </div>
                    </div>
                    {
                        order && (
                            <dialog open className="modal">
                                <div className="modal-box">
                                    <OrderModel model={model} setOrder={setOrder} />
                                    <div className="modal-action">
                                        <button className="btn " onClick={() => setOrder(false)}>Cancel</button>
                                    </div>
                                </div>
                            </dialog>
                        )
                    }
                    <button className='btn w-full btn-primary' onClick={()=>setOrder(true)}>
                       Orders
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ListingDatailsCard