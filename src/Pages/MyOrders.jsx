import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const MyOrders = () => {
  const [myorder, setMyorder] = useState([])
  const { user } = use(AuthContext)
  useEffect(() => {
    if (!user?.email) return
    fetch(`http://localhost:3000/my-order?email=${user.email}`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
      .then(data => {
        setMyorder(data.result)
        console.log(data)
      })
  }, [user])
  const handleDownloadPdf = () => {
    const doc = new jsPDF()
    doc.text(`order ${user.displayName}`, 14, 15)
    autoTable(doc,{
      startY: 25,
      head: [['Product Name','BuyerName','Price','Quantity']],
      body: myorder.map(o => [
        o.category,
        o.buyerName,
        o.price,
        o.quantity,
      ])
    })
    doc.save(`order${user.displayName}.pdf`)
  }
  return (
    <div className='p-6'>
      <div className='overflow-x-auto'>
        <table className='min-w-full border'>
          <thead>
            <tr className='bg-gray-100 text-left'>
              <th className='px-4 py-2 border'>Product Name</th>
              <th className='px-4 py-2 border'>Buyer Name</th>
              <th className='px-4 py-2 border'>Price</th>
              <th className='px-4 py-2 border'>Quantity</th>
            </tr>
          </thead>

          <tbody>
            {myorder.map((order) => (
              <tr>
                <td className='px-4 py-2 border'>{order.category}</td>
                <td className='px-4 py-2 border'>{order.buyerName}</td>
                <td className='px-4 py-2 border'>{order.price}</td>
                
                <td className='px-4 py-2 border'>{order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        myorder.length > 0 && (
          <button onClick={handleDownloadPdf}>
            Download
          </button>
        )
      }
    </div>
  )
}

export default MyOrders