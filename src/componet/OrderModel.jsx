import React, { use } from 'react'
import { AuthContext } from '../context/AuthContext'

const OrderModel = () => {
    const { user } = use(AuthContext)
    const handleSubmite = (e) => {
        e.preventDefault()
        const fromData = {
            buyerName: user.displayName,
            category: e.target.category.value,
            location:,
            price: e,
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
        <div className='card border mt-6 mb-8 border-gray-200 bg-base-100 w-full   max-w-md mx-auto shadow-2xl rounded-2xl'>
            <div className='card-body p-6 relative'>
                <h2 className='text-2xl font-bold text-center mb-6'>Place Order</h2>
                <form onSubmit={handleSubmite} className='space-y-4'>
                    <div>
                        <label className='label font-medium'>Buyer Name</label>
                       
                    </div>
                    <div>
                        <label className='label font-medium'>Email</label>
                        <input
                            name=''
                            required
                            className='input w-full rounded-full focus:border-0 focus:outline-gray-200' />
                    </div>
                    <div>
                        <label className='label font-medium'>Product Name</label>
                        <input
                            name=""
                            required
                            className='input w-full rounded-full focus:border-0 focus:outline-gray-200' alt="" />
                    </div>

                    <div>
                        <label className='label font-medium'>Price</label>
                        <textarea
                            name="price"
                            required
                            rows='3'
                            className='textarea w-full rounded-2xl focus:outline-gray-200 h-[250px]' placeholder=''></textarea>
                    </div>
                    <div>
                        <button
                            type='submit'
                            className='btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700'>Add Listing</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default OrderModel