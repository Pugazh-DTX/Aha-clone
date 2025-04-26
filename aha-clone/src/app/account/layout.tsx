// layout.tsx
import React, { ReactNode } from 'react';
import Menu from './profilestylemenu';
import './styles.scss';

// Explicitly define the type for children
interface AccountLayoutProps {
  children: ReactNode;
}

const AccountLayout: React.FC<AccountLayoutProps> = ({ children }) => {
  return (
    <div className="account-layout">
      <Menu />
      <div className="account-content">{children}</div>
    </div>
  );
};

export default AccountLayout;
