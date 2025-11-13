import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'
import toast from 'react-hot-toast'
import { FaEye } from 'react-icons/fa'
import { IoEyeOff } from 'react-icons/io5'

const Register = () => {
 const [show, setShow] = useState(false)
  const {
    createUserWithEmailAndPasswordFunc,
    // updateProfileFunc,
    signoutUserFunc,
    signInwithEmailFunc,
    setUser,
    user,
  } = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state || "/"

  const handleSignup = (e) => {
    e.preventDefault()
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;
    const email = e.target.email?.value;
    const password = e.target.password?.value;

    const pass = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&#^()\-_=+]{6,}$/;

    if (!pass.test(password)) {
      toast.error(" password must be at least 6 characters on Uppercase letter in the latter one lowercase letter")
      return
    }
    createUserWithEmailAndPasswordFunc(email, password).then((res) => {
      updateProfileFunc({ displayName, photoURL })
        .then(() => {
          signoutUserFunc().then(() => {
            toast.success('signup successful')
            setUser(user)
            navigate('/login')
          })
        })
        .catch((e) => {
          toast.error(e.message)
        })
    }).catch((e) => {
      toast.error(e.message)
    })
  }

  const handleGoogleSignin = () => {
    signInwithEmailFunc()
      .then((res) => {
        setUser(res.user)
        navigate(from)
        toast.success('signin successful')
      })
      .catch((e) => {
        toast.error(e.message)
      })
  }
  return (
    <div>
      <div className="hero-content mx-auto p-5 flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-[300px] md:w-[400px] shadow-2xl">
          <div className="card-body w-[300px] md:w-96 ">
            <h1 className='text-center font-bold text-2xl'>Register</h1>
            <form onSubmit={handleSignup}>
              <fieldset className="fieldset">

                <label className='label' >Name</label>
                <input type="text" name="name" className='input' placeholder='Name' />

                <label className="label">Email</label>
                <input type="email" name="email" className="input" placeholder="Email" />

                <label className='label'>Photo-URL</label>
                <input type="url" className='input' name="photo" placeholder='Photo-URL' />

                <div className='relative'>

                  <label className="font-bold ">Password</label>
                  <input type={show ? "text" : "password"} name="password" className="input" placeholder="Password" />
                  <span onClick={() => setShow(!show)} className='absolute right-[20px] top-[34px] cursor-pointer z-10'>
                    {
                      show ? <FaEye/> : <IoEyeOff />
                    }
                  </span>
                </div>

                <button type='submit' className="btn btn-neutral mt-4">Register</button>
                <button className='flex btn border-black items-center justify-center gap-2 ' type='button' onClick={handleGoogleSignin}>
                  <img className='w-5 h-5' src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" />
                  Continue with Google
                </button>
                <div>
                  <p>Already have an account?
                    <Link className='text-blue-600 underline' to="/login">Login</Link>
                  </p>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register