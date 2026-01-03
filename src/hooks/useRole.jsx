
import { useEffect, useState } from 'react';
import useAuth from './useAuth'; 

const useRole = () => {
  const { user } = useAuth(); 
  const [role, setRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setRole(null);
      setLoading(false);
      return;
    }
    fetch(`http://localhost:3000/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
        setRole(data.role); 
        setLoading(false);
      })
      .catch(err => {
        console.error('Role fetch error:', err);
        setRole('user');
        setLoading(false);
      });
  }, [user?.email]);

  return [role, loading];
};

export default useRole;