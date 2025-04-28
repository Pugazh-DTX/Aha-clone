
'use client'
// app/account/profiles/[id]/page.tsx
import React from 'react';
import { useParams } from 'next/navigation'; // Use useParams to access dynamic params

const ProfilePage: React.FC = () => {
  const { id } = useParams(); // Get the 'id' from the URL parameters

  // Handle loading state or invalid id (if needed)
  if (!id) {
    return <div>Loading...</div>;
  }

  // Fetch or mock profile data based on the 'id'
  const profileData = { id, name: `Profile ${id}`, description: `This is profile ${id}` };

  return (
    <div>
      <h1 style={{color:'black'}} >{profileData.name}</h1>
      
    </div>
  );
};

export default ProfilePage;
