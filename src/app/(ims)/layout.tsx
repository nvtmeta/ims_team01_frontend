import React from 'react'
import DashboardPage from './dashboard/page'
import Sidebar from '@/components/Sidebar'
import NavBar from '@/components/NavBar'

export default function DashboardLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            {/* Include shared UI here e.g. a header or sidebar */}
            <NavBar />
            <div className='flex gap-3'>
                <Sidebar />
                {children}
            </div>
        </section>
    )
}