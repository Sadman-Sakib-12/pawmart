import React, { use } from 'react'
import { useLoaderData } from 'react-router'
import { AuthContext } from '../context/AuthContext'

const UpdateModel = () => {
    const data =useLoaderData()
    const model=data.result
    const { user } = use(AuthContext)
    const handleSubmite = (e) => {
        e.preventDefault()
        const fromData = {
            name: e.target.name.value,
            category: e.target.category.value,
            location: e.target.location.value,
            image: e.target.image.value,
            price: e.target.price.value,
            date: new Date(),
            created_by: user.email
        }
        fetch(`https://pawmart-server-gray.vercel.app/models/${model._id}`, {
            method: "PUT",
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
                <h2 className='text-2xl font-bold text-center mb-6'></h2>
                <form onSubmit={handleSubmite} className='space-y-4'>
                    <div>
                        <label className='label font-medium'>Pet Name</label>
                        <input
                            type='text'
                            name="name"
                            required
                            defaultValue={model.name}
                            className='input w-full rounded-full focus:border-0 focus:outline-gray-200' />
                    </div>

                    <div>
                        <label className='label font-medium'>Category</label>
                        <select
                            defaultValue={model.category}
                            name='category'
                            required
                            className='select w-full rounded-full focus:border-0 focus:outline-gray-200'>
                            <option value="" disabled>Category Select</option>
                            <option value="Pets">Pets</option>
                            <option value="Foo">Pet Food</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Pet Care Products">Pet Care Products</option>
                        </select>
                    </div>
                    <div>
                        <label className='label font-medium'>Price</label>
                        <input
                            name='price'
                            type='number'
                            defaultValue={model.price}
                            required
                            className='input w-full rounded-full focus:border-0 focus:outline-gray-200' />
                    </div>


                    <div>
                        <label className='label font-medium'>Location</label>
                        <input
                            name="location"
                            required
                            defaultValue={model.location}
                            className='input w-full rounded-full focus:border-0 focus:outline-gray-200' alt="" />
                    </div>

                    {/* <div>

                        <label className='label font-medium'>Description</label>
                        <textarea
                            name="description"
                            required
                            rows='3'
                            className='textarea w-full rounded-2xl focus:outline-gray-200 h-[250px]' placeholder=''></textarea>
                    </div> */}

                    <div>
                        <label className='label font-medium'>Image URL</label>
                        <input
                            type="url"
                            name="image"
                            defaultValue={model.image}
                            className='input w-full rounded-full focus:border-0 focus:outline-gray-200'
                            placeholder='https://example.com/image.jpg' alt="" />
                    </div>

                    {/* <div>
                         <label className='label font-medium'>Date</label>
                         <input 
                         type=""
                         name='' className='input w-full rounded-full focus:border-0 focus:outline-gray-200' alt="" />
                     </div> */}

                    <div>
                        <button
                            type='submit'
                            className='btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700'>Update Listing</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default UpdateModel