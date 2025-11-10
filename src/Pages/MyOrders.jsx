import React, { useState } from 'react'
import { use } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useEffect } from 'react'

const MyOrders = () => {
  const [order,setOrder]=useState([])
  const {user}=use(AuthContext)

useEffect(()=>{
  fetch(`http://localhost:3000/my-lisiting?email=${user.email}`)
}).then((res)=>res.json())
.then((res)=>{
  setOrder(data)
  console.log(data)
})



  return (
    <div></div>
  )
}

export default MyOrders