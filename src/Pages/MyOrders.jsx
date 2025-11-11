import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const MyOrders = () => {
 const[myorder,setMyorder]=useState([])
 const {user}=use(AuthContext)
useEffect(()=>{
  if(!user?.email)return
  fetch(`http://localhost:3000/my-order?email=${user.email}`,{
    headers:{
       "Content-Type": "application/json"
    }
  }).then(res=>res.json())
  .then(data=>{
    setMyorder(data.result)
    console.log(data)
  })
},[user])
  return (
    <div>
      <div>
        {
          myorder.map((model)=>(
            <div>
              <h1>{model.buyerName}</h1>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MyOrders