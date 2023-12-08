import React from 'react'
import { Link } from 'react-router-dom'

function AdminPage() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',}}>
      <ul>
        <li><Link style={{ textDecoration: 'none', color: 'black' ,fontSize: '40px'}} to="/admin/add">Add Book</Link></li>
        <br/>
        <li><Link style={{ textDecoration: 'none', color: 'black' ,fontSize: '40px'}} to="/admin/update">Update Book</Link></li>
        <br/>
        <li><Link style={{ textDecoration: 'none', color: 'black' ,fontSize: '40px'}} to="/admin/delete">Delete Book</Link></li>
      </ul>
    </div>
  )
}

export default AdminPage