import Banner from '../componet/Banner'
import { useLoaderData } from 'react-router'
import CategoryCard from '../componet/CategoryCard'
import image1 from '../assets/service1.jpg'
import image2 from '../assets/service2.jpg'
import image3 from '../assets/service3.jpg'

const Home = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      <Banner />
      <div className='grid grid-cols-3 mt-10'>
        {
          data.map(model => <CategoryCard model={model} />)
        }
      </div>

      <div>
        <h1 className='text-center text-3xl  font-bold mt-5'>Why Adopt from PawMart?</h1>
        <div className='mt-5 mb-6 grid grid-cols-3 gap-3'>
          <div className='card bg-base-100 h-100 w-96 shadow-sm'>
            <div className='w-96 h-60 p-2 object-cover'>
              <img className=' rounded-xl' src={image1} alt="" />
            </div>
            <div className='text-center'>
              <h1 className='text-4xl'>Pet Health</h1>
              <p className='font-semibold text-xl'>We offer the most amazing services for your
                pet health and High quality professionals ready
                to take care of your best friend</p>
            </div>
          </div>

          <div className='card bg-base-100 h-100 w-96 shadow-sm'>
            <div className='w-96 h-60 p-2 object-cover'>
              <img className=' rounded-xl' src={image2} alt="" />
            </div>
            <div className='text-center'>
              <h1 className='text-4xl'>Pet Health</h1>
              <p className='font-semibold text-xl'>We offer the most amazing services for your
                pet health and High quality professionals ready
                to take care of your best friend</p>
            </div>
          </div>

          <div className='card bg-base-100 h-100 w-96 shadow-sm'>
            <div className='w-96 h-60 p-2 object-cover'>
              <img className=' rounded-xl' src={image3} alt="" />
            </div>
            <div className='text-center'>
              <h1 className='text-4xl'>Pet Health</h1>
              <p className='font-semibold text-xl'>We offer the most amazing services for your
                pet health and High quality professionals ready
                to take care of your best friend</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home