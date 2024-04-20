'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { FiHome } from 'react-icons/fi';
import { HiOutlineChatAlt2, HiOutlineClipboardList } from 'react-icons/hi';
import { HiBriefcase, HiMiniUserGroup } from 'react-icons/hi2';
import { PiAddressBook } from 'react-icons/pi';
import { VscAccount } from 'react-icons/vsc';

export const menuLink = [
    {
        id: 1,
        name: 'Home',
        icon: <FiHome />,
        slug: '/dashboard'
    },
    {
        id: 2,
        name: 'Candidate',
        icon: <HiBriefcase />,
        slug: '/candidate-list'
    },
    {
        id: 3,
        name: 'Job',
        icon: <HiOutlineChatAlt2 />,
        slug: '/jobs'
    },
    {
        id: 4,
        name: 'Interview',
        icon: <HiMiniUserGroup />,
        slug: '/interviews'
    },
    {
        id: 5,
        name: 'Offer',
        icon: <VscAccount />,
        slug: '/offers'
    },
    {
        id: 5,
        name: 'User',
        icon: <VscAccount />,
        slug: '/suers'
    },
]


const Sidebar = () => {
    const [isLinkActive, setLinkActive] = useState('');

    return (
        <div className="h-full bg-gradient-to-r from-sky-400 to-blue-500 bg-indigo-500 ">
            <div className="h-screen w-64 ">
                <div className="flex h-full flex-grow flex-col overflow-y-auto   bg-white pt-5 shadow-md">
                    <div className="flex gap-3  items-center px-4 ml-10">
                        <img className="h-12 w-auto max-w-full align-middle" src="https://cdn-icons-png.freepik.com/256/13065/13065925.png?ga=GA1.1.1725227974.1708702988&semt=ais_hybrid" alt="" />
                        <span className='font-bold bg-gradient-to-r from-sky-400 to-blue-500 bg-indigo-500
                        text-transparent bg-clip-text text-3xl
                        '>IMS</span>
                    </div>

                    <div className="flex mt-3 ml-2 flex-1 flex-col">
                        <nav className="flex-1 mt-8 flex gap-2 flex-col">
                            {menuLink.map((item, index) => (
                                <Link key={index} onClick={() => setLinkActive(item.slug)}
                                    href={item.slug} title="" className={`flex cursor-pointer py-3 items-center
                                     px-4 text-xl font-medium text-blue-500 outline-none transition-all 
                                      duration-100 ease-in-out focus:border-l-4 ${isLinkActive === item.slug ? 'border-l-4 border-blue-500 bg-slate-50' : ''}`}>
                                    <span className='mr-2'>
                                        {item.icon}
                                    </span>
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
