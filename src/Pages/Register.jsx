import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);

  const { createUserWithEmailAndPasswordFunc, updateUserProfile, signInwithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !password) {
      toast.error('Please fill all required fields!');
      return;
    }

    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z\d@$!%*?&#^()\-_=+]{6,}$/;
    if (!passRegex.test(password)) {
      toast.error('Password must be 6+ chars with 1 uppercase & 1 lowercase letter');
      setShowPasswordError(true);
      return;
    }
    setShowPasswordError(false);

    setLoading(true);
    try {
      // 1. Firebase-এ user create
      const result = await createUserWithEmailAndPasswordFunc(email.trim().toLowerCase(), password);
      const firebaseUser = result.user;

      // 2. Firebase profile update (name + photo)
      await updateUserProfile({
        displayName: name,
        photoURL: photoURL || 'https://i.ibb.co/0jZJ7Yk/default-avatar.jpg'
      });

      // 3. MongoDB-তে user save করো
      const userInfo = {
        name: name.trim(),
        email: email.trim().toLowerCase(),
        photoURL: photoURL|| 'https://i.ibb.co/0jZJ7Yk/default-avatar.jpg',
        role: 'user',
        createdAt: new Date()
      };

      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userInfo)
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Registration successful! 🎉 Please login now');
        navigate('/login');
      } 
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Registration failed! Try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignin = async () => {
    setLoading(true);
    try {
      const result = await signInwithGoogle();
      const googleUser = result.user;

      // MongoDB-তে Google user save (duplicate check সহ)
      const userInfo = {
        name: googleUser.displayName || 'Google User',
        email: googleUser.email,
        photoURL: googleUser.photoURL || 'https://i.ibb.co/0jZJ7Yk/default-avatar.jpg',
        role: 'user',
        createdAt: new Date()
      };

      await fetch('https://pawmart-server-gray.vercel.app/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userInfo)
      });

      toast.success('Google sign in successful! 🐾');
      navigate('/');
    } catch (err) {
      toast.error(err.message || 'Google sign in failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-12">
      <div className="card w-full max-w-md shadow-2xl bg-base-100">
        <div className="card-body p-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-2">
            Join PawMart 🐾
          </h2>
          <p className="text-center text-base-content/70 mb-8">
            Create account to buy or sell pet products
          </p>

          <form onSubmit={handleRegister} className="space-y-6">
            {/* Name */}
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">Full Name</span></label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered input-lg w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email */}
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">Email</span></label>
              <input
                type="email"
                placeholder="your@email.com"
                className="input input-bordered input-lg w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Photo URL */}
            <div className="form-control">
              <label className="label"><span className="label-text font-semibold">Photo URL (Optional)</span></label>
              <input
                type="url"
                placeholder="https://example.com/photo.jpg"
                className="input input-bordered input-lg w-full"
                value={photoURL}
                onChange={(e) => setPhotoURL(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="form-control relative">
              <label className="label"><span className="label-text font-semibold">Password</span></label>
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Minimum 6 characters"
                className={`input input-bordered input-lg w-full pr-12 ${showPasswordError ? 'input-error' : ''}`}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setShowPasswordError(false);
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute inset-y-0 right-0 flex items-center pr-4 pt-10 text-xl text-base-content/70 hover:text-primary"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => {
                  setName('Demo User');
                  setEmail('demo@pawmart.com');
                  setPassword('Demo123');
                  toast.success('Demo User filled!');
                }}
                className="btn btn-outline btn-success"
              >
                Demo User
              </button>
              <button
                type="button"
                onClick={() => {
                  setName('Admin User');
                  setEmail('admin@pawmart.com');
                  setPassword('Admin123');
                  toast.success('Demo Admin filled!');
                }}
                className="btn btn-outline btn-warning"
              >
                Demo Admin
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary btn-lg w-full"
            >
              {loading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Creating Account...
                </>
              ) : (
                'Create Account'
              )}
            </button>

            <div className="divider">OR</div>
            <button
              type="button"
              onClick={handleGoogleSignin}
              disabled={loading}
              className="btn btn-outline btn-lg w-full flex items-center justify-center gap-3 hover:bg-red-50"
            >
              <FaGoogle className="text-xl" />
              Continue with Google
            </button>

            <div className="text-center mt-8">
              <p className="text-base-content/80">
                Already have an account?{' '}
                <Link to="/login" className="link link-primary font-bold">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;