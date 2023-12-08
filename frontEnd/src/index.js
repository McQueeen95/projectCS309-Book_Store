import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import AddBook from './component/admin/AddBook';
import AdminPage from './component/admin/AdminPage';
import UpdateBook from './component/admin/UpdateBook';
import DeleteBook from './component/admin/DeleteBook';

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
  {
    path: "/admin/update",
    element: <UpdateBook/>
  },
  {
    path: "/admin/delete",
    element: <DeleteBook/>
  }
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);