import React from 'react'
import { Link } from 'react-router-dom'

function AdminPage() {
  return (
    <div>
      <ul>
        <li><Link style={{ textDecoration: 'none', color: 'black' ,fontSize: '20px'}} to="/admin/add">Add</Link></li>
      </ul>
    </div>
  )
}

export default AdminPage