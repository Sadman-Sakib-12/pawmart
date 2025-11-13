import React, { use, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { Link } from 'react-router'
import Loading from './Loading'

const MyOrders = () => {
  const [myorder, setMyorder] = useState([])
  const { user } = use(AuthContext)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (!user?.email) return
    fetch(`https://pawmart-server-gray.vercel.app/my-order?email=${user.email}`, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => res.json())
      .then(data => {
        setMyorder(data.result)
        setLoading(false)
        console.log(data)

      })
  }, [user])
  const handleDownloadPdf = () => {
    const doc = new jsPDF()
    doc.text(`${user.displayName}`, 14, 15)
    autoTable(doc, {
      startY: 25,
      head: [['Product Name', 'BuyerName', 'Price', 'Quantity', 'Address', 'Date', 'Phone']],
      body: myorder.map(o => [
        o.category,
        o.buyerName,
        o.price,
        o.quantity,
        o.address,
        o.date,
        o.phone

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
  if (loading) {
    return <Loading />
  }
  return (
    <div className=' mt-5 space-y-4'>
      <h1 className='font-bold text-4xl text-center '>My <span className='text-amber-600 '>Orders</span></h1>
      <div className='text-center'>
        {
          myorder && (
            <Link className='btn  px-5 py-6 text-2xl mb-5 bg-pink-600 rounded-lg text-white' onClick={handleDownloadPds}>
              Download Pdf File
            </Link>
          )
        }
      </div>
      {
        myorder.length > 0 ? (
          <div className='overflow-x-auto'>
            <table className='min-w-full'>
              <thead>
                <tr className='bg-gray-100 text-black text-left'>
                  <th className='px-4 py-2 border'>Product Name</th>
                  <th className='px-4 py-2 border'>Buyer Name</th>
                  <th className='px-4 py-2 border'>Price</th>
                  <th className='px-4 py-2 border'>Quantity</th>
                  <th className='px-4 py-2 border'>Address</th>
                  <th className='px-4 py-2 border'>Date</th>
                  <th className='px-4 py-2 border'>Phone</th>
                  <th className='px-4 py-2  border'>Report</th>
                </tr>
              </thead>

              <tbody className='p-5'>
                {myorder.map((order) => (
                  <tr className='border-b  '>
                    <td className='px-4 py-2 '>{order.category}</td>
                    <td className='px-4 py-2 '>{order.buyerName}</td>
                    <td className='px-4 py-2 font-bold text-green-700'>${order.price}</td>
                    <td className='px-4 py-2 '>{order.quantity}</td>
                    <td className='px-4 py-2 '>{order.address}</td>
                    <td className='px-4 py-2 '>{order.date}</td>
                    <td className='px-4 py-2 '>{order.phone}</td>
                    <div className='text-right'>
                      {
                        myorder && (
                          <Link className='btn mb-1 gap-4 border-indigo-700 mr-4 mt-2 hover:text-white hover:bg-indigo-700 ' onClick={handleDownloadPdf}>
                            Download
                          </Link>
                        )
                      }
                    </div>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Ordes is not Found</p>
        )
      }
    </div>
  )
}

export default MyOrders