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
            <div className='flex '>
                <Sidebar />
                <div className='w-full'>
                    <NavBar />
                    {children}
                </div>
            </div>
        </section>
    )
}