import React from 'react';
import Header from "@/components/header";

const Layout = (props) => {
  return (
    <main>
      <Header/>
      <div className='container pt-8 relative z-1'>
        {props.children}
      </div>
    </main>
  );
};

export default Layout;