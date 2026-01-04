import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    user,
    setUser,
    signInWithEmailAndPasswordFunc,
    signInwithEmailFunc,
  } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password) {
      toast.error('Please enter both email and password!');
      return;
    }

    setLoading(true);
    try {
      const res = await signInWithEmailAndPasswordFunc(email.trim().toLowerCase(), password);
      setUser(res.user);
      toast.success('Login successful! 🎉');
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message || 'Login failed! Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const res = await signInwithEmailFunc();
      setUser(res.user);
      toast.success('Google login successful! 🐾');
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message || 'Google login failed!');
    } finally {
      setLoading(false);
    }
  };


  const handleDemoUser = () => {
    setEmail('demo@pawmart.com');
    setPassword('Demo@1');
    toast.success('Demo User credentials filled!');
  };


  const handleDemoAdmin = () => {
    setEmail('admin@pawmart.com');
    setPassword('Admin@1');
    toast.success('Demo Admin credentials filled!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-12">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body p-8">
    
          <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-2">
            Welcome to PawMart
          </h2>
          <p className="text-center text-base-content/70 mb-8">
            Login to buy or sell your favorite pet products
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6 pt-4 border-t">
            <button
              type="button"
              onClick={handleDemoUser}
              disabled={loading}
              className="btn btn-outline btn-success btn-sm"
            >
              Demo User
            </button>
            <button
              type="button"
              onClick={handleDemoAdmin}
              disabled={loading}
              className="btn btn-outline btn-warning btn-sm"
            >
              Demo Admin
            </button>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
   
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <input
                type="email"
                placeholder="demo@pawmart.com"
                className="input input-bordered input-lg w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
            </div>

 
            <div className="form-control relative">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="••••••••"
                className="input input-bordered input-lg w-full pr-12"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 pt-1 text-xl text-base-content/70 hover:text-primary transition-all duration-200"
                aria-label={showPass ? 'Hide password' : 'Show password'}
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>


              <div className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </div>
            </div>

    
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary btn-lg w-full"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>


            <div className="divider divider-horizontal">OR</div>


            <button
              type="button"
              onClick={handleGoogleLogin}
              disabled={loading}
              className="btn btn-outline btn-lg w-full flex items-center justify-center gap-3 hover:bg-red-50 hover:border-red-500 transition-all"
            >
              <FaGoogle className="text-xl" />
              Continue with Google
            </button>

       


  
            <div className="text-center mt-8 pt-4 border-t">
              <p className="text-base-content/80">
                Don't have an account?{' '}
                <Link
                  to="/regiter"
                  className="link link-primary font-bold hover:link-hover"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;