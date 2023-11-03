import React from 'react';

import Header from '@/Layouts/Header/Header';
import Footer from '@/Layouts/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='layout'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;