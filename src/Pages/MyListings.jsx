import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const MyListings = () => {
  const { user } = use(AuthContext)
  const [listing, setListing] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user?.email) return
    fetch(`http://localhost:3000/my-lisiting?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setListing(data.result)
        setLoading(false)
      })
  }, [user])
  if (loading) {
    return <div>Loading</div>
  }
  return (
    <div className='p-2'>
      <table className='min-w-full '>
        <thead >
          <tr className='bg-gray-100 text-left'>
            <th className='px-4 py-2 border'>Name</th>
            <th className='px-4 py-2 border'>Category</th>
            <th className='px-4 py-2 border'>Price</th>
            <th className='px-4 py-2 border'>Location</th>
          </tr>
        </thead>

        <tbody>
          {listing.map(model => (
            <tr>
              <td className='px-4 py-2 border'>{model.name}</td>
              <td className='px-4 py-2 border'>{model.category}</td>
              <td className='px-4 py-2 border'>{model.price}</td>
              <td className='px-4 py-2 border'>{model.location}</td>
              <td className='px-4 py-2 border'>Update</td>
              <td className='px-4 py-2 border'>Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyListings