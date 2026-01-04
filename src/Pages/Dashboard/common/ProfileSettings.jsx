import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import toast from 'react-hot-toast';
import { FaUser, FaEnvelope, FaCamera, FaSave, FaEdit, FaUserShield } from 'react-icons/fa';

const ProfileSettings = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [role, setRole] = useState('user');
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);


  useEffect(() => {
    if (user?.email) {
      setName(user.displayName || '');
      setPhotoURL(user.photoURL || '');


      fetch(`https://pawmart-server-gray.vercel.app/users/${user.email}`)
        .then(res => res.json())
        .then(data => {
          if (data.role) {
            setRole(data.role);
          }
        })
        .catch(err => {
          console.log('Role fetch failed, using default', err);
          setRole('user');
        });
    }
  }, [user]);

  const handleSave = async () => {
    if (!name.trim()) {
      toast.error('Name is required');
      return;
    }

    setLoading(true);
    try {
   
      await updateUserProfile({
        displayName: name.trim(),
        photoURL: photoURL.trim() || 'https://i.ibb.co/0jZJ7Yk/default-avatar.jpg'
      });

     
      const response = await fetch(`http://localhost:3000/users/${user.email}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          photoURL: photoURL.trim() || 'https://i.ibb.co/0jZJ7Yk/default-avatar.jpg'
        })
      });

      if (!response.ok) throw new Error('Database update failed');

      toast.success('Profile updated successfully! 🎉');
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      toast.error('Failed to update profile');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-200 to-base-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-5 bg-white/90 backdrop-blur-xl px-10 py-6 rounded-full shadow-2xl mb-8 border border-white/50">
            <FaUser className="text-4xl text-primary animate-pulse" />
            <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Profile Settings
            </h1>
          </div>
          <p className="text-xl text-base-content/80">
            Manage your account information and preferences
          </p>
        </div>

    
        <div className="card bg-base-100 shadow-2xl rounded-3xl overflow-hidden">
          <div className="card-body p-10">
            <div className="flex flex-col md:flex-row items-center gap-12">
 
              <div className="flex flex-col items-center">
                <div className="avatar">
                  <div className="w-56 rounded-full ring ring-primary ring-offset-base-100 ring-offset-8 shadow-2xl">
                    <img 
                      src={photoURL || 'https://i.ibb.co/0jZJ7Yk/default-avatar.jpg'} 
                      alt="Profile"
                      className="object-cover"
                    />
                  </div>
                </div>
                {isEditing && (
                  <div className="mt-8 w-full max-w-sm">
                    <input
                      type="url"
                      placeholder="Photo URL (ImgBB recommended)"
                      className="input input-bordered input-lg w-full"
                      value={photoURL}
                      onChange={(e) => setPhotoURL(e.target.value)}
                    />
                    <label className="label">
                      <span className="label-text-alt text-base-content/60">
                        Paste direct image link
                      </span>
                    </label>
                  </div>
                )}
              </div>


              <div className="flex-1 space-y-10 w-full">
 
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold flex items-center gap-3">
                      <FaUser className="text-primary" />
                      Full Name
                    </span>
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="input input-bordered input-lg text-xl"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                    />
                  ) : (
                    <div className="text-3xl font-bold text-base-content">
                      {name || 'Not set'}
                    </div>
                  )}
                </div>


                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold flex items-center gap-3">
                      <FaEnvelope className="text-primary" />
                      Email Address
                    </span>
                  </label>
                  <div className="text-2xl font-medium text-base-content/80">
                    {user.email}
                  </div>
                </div>


                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-bold flex items-center gap-3">
                      <FaUserShield className="text-primary" />
                      Account Role
                    </span>
                  </label>
                  <div className={`badge badge-lg text-white py-4 px-6 text-lg ${role === 'admin' ? 'bg-error' : 'bg-success'}`}>
                    {role.toUpperCase()}
                  </div>
                </div>

  
                <div className="flex gap-6 mt-12">
                  {isEditing ? (
                    <>
                      <button
                        onClick={handleSave}
                        disabled={loading}
                        className="btn btn-primary btn-lg flex-1 gap-4 text-xl"
                      >
                        {loading ? (
                          <span className="loading loading-spinner"></span>
                        ) : (
                          <FaSave />
                        )}
                        Save Changes
                      </button>
                      <button
                        onClick={() => {
                          setIsEditing(false);
                          setName(user.displayName || '');
                          setPhotoURL(user.photoURL || '');
                        }}
                        className="btn btn-ghost btn-lg flex-1"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="btn btn-primary btn-lg w-full gap-4 text-xl"
                    >
                      <FaEdit />
                      Edit Profile
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;