'use client'; // ✅ Required for client-side interaction

import React from 'react';
import { useRouter } from 'next/navigation'; // ✅ App Router version

interface Profiles {
  id: number;
  name: string;
}

const ProfilesPage: React.FC = () => {
  const router = useRouter();

  const profiles = [
    { id: 0, name: 'Profile 1' },
  ];

  const handleProfileClick = (id: number) => {
    router.push(`/account/profiles/${id}`);
  };

  return (
    <div>
      <h1 style={{ color: 'black' }}>Profiles</h1>
      <ul style={{ listStyleType: 'none', paddingLeft: 0 }} >
        {profiles.map((profile) => (
          <li
            key={profile.id}
            onClick={() => handleProfileClick(profile.id)}
            style={{ textDecoration: 'none' ,}}
          >
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProfilesPage;
