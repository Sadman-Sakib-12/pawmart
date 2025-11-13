import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link, useNavigate, useParams } from 'react-router'
import Swal from 'sweetalert2'
import Loading from './Loading'


const MyListings = () => {
  const { user } = use(AuthContext)
  const [listing, setListing] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user?.email) return
    fetch(`https://pawmart-server-gray.vercel.app/my-lisiting?email=${user.email}`)
      .then(res => res.json())
      .then(data => {
        setListing(data.result)
        setLoading(false)
      })
  }, [user])
  if (loading) {
    return <Loading />
  }
  const handleDelte = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://pawmart-server-gray.vercel.app/models/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json())
          .then(data => {
            console.log(data)
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            fetch(`https://pawmart-server-gray.vercel.app/my-lisiting?email=${user.email}`)
              .then(res => res.json())
              .then(data => {
                setListing(data.result)
                setLoading(false)
              })
          })
          .catch(err => {
            console.log(err)
          })
      }
    });
  }
  return (
    <div >
      <h1 className='mt-6 font-bold text-4xl text-center '>My <span className='text-indigo-700 '>Listings</span></h1>
      {listing.length > 0 ? (
        <div className='mt-5  overflow-x-auto border'>
          <table className='min-w-full border-collapse'>
            <thead className=' shadow-md bg-gray-200 text-black'>
              <tr className=' text-left'>
                <th className='px-4 py-2 '>Name</th>
                <th className='px-4 py-2 '>Category</th>
                <th className='px-4 py-2 '>Price</th>
                <th className='px-4 py-2'>Location</th>
                <th className='px-4 py-2'>Edit</th>
              </tr>
            </thead>

            <tbody >
              {listing.map(model => (
                <tr className=''>
                  <td className='px-4 py-2 font-bold'>{model.name}</td>
                  <td className='px-4 py-2  font-bold'>{model.category}</td>
                  <td className='px-4 py-2  font-bold'>{model.price}</td>
                  <td className='px-4 py-2  font-bold '>{model.location}</td>

                  <td className=''>
                    <Link to={`/update-model/${model._id}`} className='btn gap-4 border-indigo-700 mr-4 mt-2 hover:text-white hover:bg-indigo-700 '>Update</Link>
                    <button onClick={() => handleDelte(model._id)} className='btn border-red-400 mr-4 mt-2 hover:text-white hover:bg-green-700'>Delete</button>
                  </td>


                </tr>

              ))}
            </tbody>
          </table>
        </div>
      ):(
        <p className='text-center mt-30 font-bold text-2xl'> List is not Found</p>
      )
     }
    </div>
  )
}

export default MyListings