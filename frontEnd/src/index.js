import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import AddBook from './component/admin/AddBook';
import AdminPage from './component/admin/AdminPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin", 
    element: <AdminPage/>
  },
  {
    path: "/admin/add",
    element: <AddBook/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);