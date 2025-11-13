import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { Link } from 'react-router'

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
    doc.text(`${user.displayName}`, 14, 15)
    autoTable(doc, {
      startY: 25,
      head: [['Product Name', 'BuyerName', 'Price', 'Quantity',]],
      body: myorder.map(o => [
        o.category,
        o.buyerName,
        o.price,
        o.quantity,
      ])
    })
    doc.save(`${user.displayName}.pdf`)
  }
  const handleDownloadPds = () => {
    const doc = new jsPDF()
    const curretdata = new Date().toLocaleDateString('en-GB')
    doc.setFontSize(12)
    doc.text(`Name:${user.displayName}`, 14, 15)
    doc.text(`Email:${user.email}`, 14, 22)
    doc.text(`Date:${curretdata}`, 14, 29)
    autoTable(doc, {
      startY: 38,
      head: [['Product Name', 'BuyerName', 'Price',]],
      body: myorder.map(o => [
        o.category,
        o.buyerName,
        o.price,
        o.quantity,
      ])
    })
    doc.save(`${user.displayName}.pdf`)
  }
  return (
    <div className=' mt-5'>
      <div className='text-center'>
        {
          myorder && (
            <Link className='btn  px-10 py-6 text-2xl mb-5 bg-pink-600 rounded-lg text-white' onClick={handleDownloadPds}>
              Download Pdf File
            </Link>
          )
        }
      </div>
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
                {/* <td className='px-4 py-2 border'>{order.date}</td> */}
                <td className='px-4 py-2 border'>{order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='text-right'>
        {
          myorder && (
            <Link className='btn mt-3 mb-3 px-20  py-6 text-2xl bg-pink-600 rounded-lg text-white' onClick={handleDownloadPdf}>
              Download
            </Link>
          )
        }
      </div>
    </div>
  )
}

export default MyOrders