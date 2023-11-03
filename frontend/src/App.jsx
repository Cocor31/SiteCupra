import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRouter from "@/Pages/Public/Public.router";

import "@/Assets/Style/Import.scss";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<PublicRouter />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;