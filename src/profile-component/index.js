import React, { useEffect } from 'react';
import UserProfilePage from './user-profile.js';
import { useLocation } from 'react-router-dom';

function ProfilePage({ updateUser, userState }) {
  const { pathname } = useLocation();
  const paths = pathname.split('/');
  const test = paths[1];

  useEffect(() => {
    console.log(test, 'test');
    if (test === 'profile') {
      updateUser(true);
    }
  }, []);

  return (
    <div>
      <UserProfilePage />
    </div>
  );
}

export default ProfilePage;
