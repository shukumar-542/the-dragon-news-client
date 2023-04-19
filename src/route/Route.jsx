import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import Home from '../Pages/Home/Home/Home';

const route = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path :'/',
                element : <Home></Home>
            }
        ]
    }
])

export default route;