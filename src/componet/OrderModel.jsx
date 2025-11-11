import React, { use } from 'react'
import { AuthContext } from '../context/AuthContext'

const OrderModel = ({ model, setOrder }) => {
    const { user } = use(AuthContext)
    const handleSubmite = (e) => {
        e.preventDefault()
        const fromData = {
            buyerName: user.displayName,
            category: model.category,
            productId: model._id,
            location: model.location,
            price: model.price,
            date: new Date(),
            email: user.created_by,
            address: e.target.address.value,
            phone: e.target.phone.value,
            note: e.target.note.value,
            quantity: e.target.quantity.value
        }
        fetch(`http://localhost:3000/order/${model._id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(fromData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrder(false)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <div>

            <div className='border mt-6 mb-8 border-gray-200 bg-base-100    max-w-md mx-auto shadow-2xl rounded-2xl'>
                <div className='card-body p-6 relative'>
                    <h2 className='text-2xl font-bold text-center mb-6'>Place Order</h2>
                    <form onSubmit={handleSubmite} className='space-y-4'>
                        <div>
                            <label className='label font-medium'>Buyer Name</label>
                            <input
                                name="buyerName"
                                value={user.displayName}
                                readOnly
                                className='input w-full rounded-full focus:border-0 focus:outline-gray-200' />
                        </div>
                        <div>
                            <label className='label font-medium'>Email</label>
                            <input
                                name="created_by"
                                value={user.email}
                                readOnly
                                className='input w-full rounded-full focus:border-0 focus:outline-gray-200' />
                        </div>
                        <div>
                            <label className='label font-medium'>Product Name</label>
                            <input
                                name="category"
                                value={model.category}
                                readOnly
                                className='input w-full rounded-full focus:border-0 focus:outline-gray-200' alt="" />
                        </div>

                        <div>
                            <label className='label font-medium'>Quantity</label>
                            <input
                                name="quantity"
                                required
                                className='input w-full rounded-full focus:border-0 focus:outline-gray-200' alt="" />
                        </div>

                        <div>
                            <label className='label font-medium'>Price</label>
                            <input
                                name="price"
                                value={model.price}
                                readOnly
                                className='input w-full rounded-full focus:border-0 focus:outline-gray-200'></input>
                        </div>
                        <div>
                            <label className='label font-medium'>Address</label>
                            <input
                                name="address"
                                required
                                className='input w-full rounded-full focus:border-0 focus:outline-gray-200' />
                        </div>
                        <div>
                            <label className='label font-bold'>Phone</label>
                            <input
                                 name="phone"
                                required
                                className='input w-full rounded-full focus:border-0 focus:outline-gray-200'/>
                        </div>

                        <div>
                            <label className='label font-medium'>Additional Notes</label>
                            <textarea
                                name="notes"
                                required
                                rows='3'    
                                className='input w-full rounded-full focus:border-0 focus:outline-gray-200'></textarea>
                        </div>
                        <div>
                            <button
                                type='submit'
                                className='btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700'>Confirm Order</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>


    )
}

export default OrderModel