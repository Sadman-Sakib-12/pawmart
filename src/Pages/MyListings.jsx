import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router'

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
      <table className='min-w-full'>
        <thead className=''>
          <tr className='bg-blue-400 text-left'>
            <th className='px-4 py-2 '>Name</th>
            <th className='px-4 py-2 '>Category</th>
            <th className='px-4 py-2 '>Price</th>
            <th className='px-4 py-2'>Location</th>
            <th className='px-4 py-2 -span-6'>Delete</th>
            <th className='px-4 py-2'>Update</th>

          </tr>
        </thead>

        <tbody>
          {listing.map(model => (
            <tr>
              <td className='px-4 py-2 font-bold'>{model.name}</td>
              <td className='px-4 py-2  font-bold'>{model.category}</td>
              <td className='px-4 py-2  font-bold'>{model.price}</td>
              <td className='px-4 py-2  font-bold '>{model.location}</td>
              <td className='px-4 py-2  font-bold bg-amber-500 gap-1 mt-5'><button>Delete</button></td>
              <td className='px-4 py-2  font-bold'><button>Update</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyListings