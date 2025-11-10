import React, { use, useEffect, useState } from 'react'
import MyListingCard from '../componet/MyListingCard'
import { AuthContext } from '../context/AuthContext'

const MyListings = () => {
  const { user } = use(AuthContext)
  const [listing, setListing] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if(!user?.email)return
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
    <div className='grid grid-cols-3 gap-3 mb-5'>
      {
        listing.map(model => <MyListingCard model={model} />)
      }
    </div>
  )
}

export default MyListings