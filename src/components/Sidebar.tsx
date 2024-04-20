'use client';

import Link from 'next/link';
import React from 'react'
import { HiOutlineChatAlt2, HiOutlineClipboardList } from 'react-icons/hi';
import { HiBriefcase, HiMiniUserGroup } from 'react-icons/hi2';
import { PiAddressBook } from 'react-icons/pi';
import { VscAccount } from 'react-icons/vsc';


const Sidebar = () => {
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
                        <nav className="flex-1 mt-8 flex gap-6 flex-col">
                            <Link href="/dashboard" title="" className="flex cursor-pointer items-center border-l-4 border-l-blue-500 py-2 
                                px-4 text-xl font-bold text-blue-500 outline-none transition-all 
                                duration-100 ease-in-out focus:border-l-4">
                                <svg className="mr-4 h-6 w-6 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" className=""></path>
                                </svg>
                                Dashboard
                            </Link>

                            <Link href="/candidate-list" className="flex cursor-pointer items-center border-l-blue-500 py-2 px-4 text-xl font-bold text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-blue-500 hover:text-blue-500 focus:border-l-4">
                                <svg className="mr-4 h-6 w-6 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" /> <HiMiniUserGroup className='text-2xl' />
                                </svg>
                                Candidate
                            </Link>

                            <Link href="#" className="flex cursor-pointer items-center border-l-blue-500 py-2 px-4 text-xl font-bold text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-blue-500 hover:text-blue-500 focus:border-l-4">
                                <svg className="mr-4 h-6 w-6 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" /><HiBriefcase className='text-2xl' />
                                </svg>
                                Job
                            </Link>

                            <Link href="#" className="flex cursor-pointer items-center border-l-blue-500 py-2 px-4 text-xl font-bold text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-blue-500 hover:text-blue-500 focus:border-l-4">
                                <svg className="mr-4 h-6 w-6 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" /> <HiOutlineChatAlt2 className='text-2xl' />
                                </svg>
                                Interview
                            </Link>

                            <Link href="#" className="flex cursor-pointer items-center border-l-blue-500 py-2 px-4 text-xl font-bold text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-blue-500 hover:text-blue-500 focus:border-l-4">
                                <svg className="mr-4 h-6 w-6 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" /> <HiOutlineClipboardList className='text-2xl' />
                                </svg>
                                Offer
                            </Link>

                            <a href="#" className="flex cursor-pointer items-center border-l-blue-500 py-2 px-4 text-xl font-bold text-gray-600 outline-none transition-all duration-100 ease-in-out hover:border-l-4 hover:border-l-blue-500 hover:text-blue-500 focus:border-l-4">
                                <svg className="mr-4 h-6 w-6 align-middle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" /> <PiAddressBook className='text-2xl' />
                                </svg>
                                User
                            </a>
                        </nav>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
