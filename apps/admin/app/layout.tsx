import './globals.css'
import React from 'react'

export const metadata = {
  title: 'Nexbin - Admin',
  description: 'Admin panel'
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div style={{display:'flex', minHeight:'100vh'}}>
          <aside style={{width:240, borderRight:'1px solid #eee', padding:16}}>
            <h2>Admin</h2>
            <nav>
              <ul>
                <li>Dashboard</li>
              </ul>
            </nav>
          </aside>
          <main style={{flex:1, padding:16}}>{children}</main>
        </div>
      </body>
    </html>
  )
}
