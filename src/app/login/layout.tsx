import React from 'react';
type LayoutProps = {
    children: React.ReactNode;
  };


const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black-gray">
        <img src="../black_gray_logo.png" className="absolute top-0 left-0 w-32 h-32 p-2" />
      {children}
    </div>
  );
};

export default Layout;
