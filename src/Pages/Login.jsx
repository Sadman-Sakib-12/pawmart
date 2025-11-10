import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
   const [show, setShow] = useState(false)
  const {
    user,
    setUser,
    signInWithEmailAndPasswordFunc,
    sendPassResetEmailFunc,
    signInwithEmailFunc,
  } = useContext(AuthContext)
  const location = useLocation()


  const from = location.state || "/"
  const navigate = useNavigate()

  const emailRef = useRef(null)

  useEffect(() => {
    if (user) {
      navigate('/')
      return
    }

  }, [user, navigate])

  const handleSignin = (e) => {
    e.preventDefault()
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        setUser(res.user)
        toast.success("signin successful")
        navigate("/")
      })
      .catch((e) => {
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

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    sendPassResetEmailFunc(email)
      .then(() => {
        toast.success("Forget successful")
      })
      .catch((e) => {
        toast.error("Please enter your email first")
      })
  }
  return (
    <div>
      <div className="hero-content mx-auto mt-10 mb-10 flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-[350px] md:w-[400px] shadow-md">
          <div className="card-body md:w-96 mx-auto">
            <h1 className='text-center font-bold text-2xl'>Login</h1>
            <form onSubmit={handleSignin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input type="email" name="email" ref={emailRef} className="input" placeholder="Email" />
                <div className='relative'>
                  <label className="label">Password</label>
                  <input type={show?'text':'password'} name="password" className="input" placeholder="Password" />
                  <span onClick={()=>setShow(!show)} className='absolute right-[20px] top-[34px] cursor-pointer z-10'>
                    {/* {
                      show ?<FaEye />:<IoEyeOff />
                    } */}
                  </span>
                </div>
                <div>
                  <button onClick={handleForgetPassword} type='button' className="link link-hover">Forgot password?</button>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">Login</button>
                <button className='flex btn border-black items-center justify-center gap-2 ' type='button' onClick={handleGoogleSignin}>
                  <img className='w-5 h-5' src="https://www.svgrepo.com/show/475656/google-color.svg" alt="google" />
                  Continue with Google
                </button>

                <div>
                  <p>Already have an accunt?

                    <Link className='text-blue-600 underline' to='/regiter'>Regiters</Link>
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

export default Login