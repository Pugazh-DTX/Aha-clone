'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import IconMapper from '@/components/atoms/IconMapper'; // your new SVG-based IconMapper
import './styles.scss';

const ProfileStyleMenuNoIcons: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const menuItems = [
    { name: 'info', route: '/account/info' },
    { name: 'subscription', route: '/account/subscription' },
    { name: 'device', route: '/account/device' },
    { name: 'profiles', route: '/account/profiles' },
    { name: 'parental', route: '/account/parental' },
    { name: 'settings', route: '/account/settings' },
  ];

  const handleNavigate = (route: string) => {
    router.push(route);
  };

  return (
    <div className="account-menu">
      {menuItems.map(({ name, route }) => {
        const isActive =
          pathname === route ||
          (route === '/account/profiles' && pathname.startsWith(route));

        return (
          <div
            key={route}
            className={`account-menuitem ${isActive ? 'active' : ''}`}
            tabIndex={0}
            role="button"
            onClick={() => handleNavigate(route)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleNavigate(route); }}
          >
            {/* Icon first */}
            <IconMapper
              name={name as any} // because our IconMapper expects exact names (smallcase)
              className="icon"
              isActive={isActive}
            />

            {/* Text next */}
            <div>{name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ProfileStyleMenuNoIcons;
