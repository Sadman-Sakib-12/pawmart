import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Link, useNavigate, useParams } from 'react-router'
import Swal from 'sweetalert2'

const MyListings = () => {
  const { user } = use(AuthContext)
  const navigate = useNavigate()
  const {id}=useParams()
  const [listing, setListing] = useState([])
  // const [modal, setModal] = useState({})
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
        fetch(`http://localhost:3000/models/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res => res.json())
          .then(data => {
            console.log(data)
            // navigate('/models')
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            fetch(`http://localhost:3000/my-lisiting?email=${user.email}`)
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
    <div className=' p-2 border'>
      <table className='min-w-full'>
        <thead className='w-50 shadow-md bg-gray-200'>
          <tr className=' text-left'>
            <th className='px-4 py-2 '>Name</th>
            <th className='px-4 py-2 '>Category</th>
            <th className='px-4 py-2 '>Price</th>
            <th className='px-4 py-2'>Location</th>
            <th className='px-4 py-2'>Edit</th>
          </tr>
        </thead>

        <tbody>
          {listing.map(model => (
            <tr>
              <td className='px-4 py-2 font-bold'>{model.name}</td>
              <td className='px-4 py-2  font-bold'>{model.category}</td>
              <td className='px-4 py-2  font-bold'>{model.price}</td>
              <td className='px-4 py-2  font-bold '>{model.location}</td>

              <td className=''>
                <Link to={`/update-model/${model._id}`} className='btn gap-4 border-indigo-700 mr-4 mt-2 hover:text-white hover:bg-indigo-700 '>Update</Link>
                <button onClick={() => handleDelte(model._id)} className='btn'>Delete</button>
              </td>


            </tr>

          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MyListings