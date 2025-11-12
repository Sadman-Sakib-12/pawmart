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
            <div className=" flex gap-4 mt-10 rounded-lg bg-base-100 h-[350px] w-[320px] md:w-[650px] mx-auto shadow-sm">
                <figure >
                    <img
                        className=' h-[300px] md:h-[300px] p- rounded-lg w-[300px] md:w-[300px]' src={model.image}
                        alt="Shoes" />
                </figure>
                <div className=" ">
                    <div className="space-y-2">
                        <h2 className="card-title">{model.name}</h2>
                        <p>{model.category}</p>
                        <p className=' rounded '>{model.location}</p>

                        <div className='space-y-2'>
                            <p className=''>{model.created_by}</p>
                            <p>{model.description}</p>
                            <p className=' rounded '>${model.price}</p>

                        </div>
                    </div>


                    <div className="mt-10">
                        <div className=" p-5 justify-end">

                            {/* The button to open modal */}
                            <a href="#my_modal_8 " onClick={() => setOrder(true)} className=" btn w-full bg-pink-600 rounded-lg text-white">Order Now</a>


                            {/* Put this part before </body> tag */}
                            <div className="modal    w-full " role="dialog" id="my_modal_8">
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