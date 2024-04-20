"use client"

import { BreadcrumbItem, Breadcrumbs, Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input } from '@nextui-org/react'
import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { MdKeyboardArrowDown } from 'react-icons/md'

const Candidate = ({ listForms }: any) => {
    return (
        <div className='mt-10 '>
            <Breadcrumbs className='mx-6 mb-4' variant='solid' radius='full'>
                <BreadcrumbItem size='lg' className='font-bold'>Candidate List</BreadcrumbItem>
            </Breadcrumbs>
            <div className='m-6 bg-white rounded-2xl p-3 flex items-center justify-between gap-2'>
                <div className='flex gap-2'>
                    <Input
                        size='lg'
                        isClearable
                        radius="lg"
                        className='w-96 bg-slate-100 rounded-xl'
                        placeholder="Type to search..."
                        startContent={
                            <SearchIcon className="text-black/50 mb-0.5  text-white pointer-events-none flex-shrink-0" />
                        }
                    />
                    <Dropdown>
                        <DropdownTrigger>
                            <Button size='lg' className='bg-slate-100 p-3 w-64 justify-between rounded-xl flex gap-2 items-center'>
                                <p className='font-medium'>Status</p>
                                <MdKeyboardArrowDown className='text-4xl font-bold' />
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new">New file</DropdownItem>
                            <DropdownItem key="copy">Copy link</DropdownItem>
                            <DropdownItem key="edit">Edit file</DropdownItem>
                            <DropdownItem key="delete" className="text-danger" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    {/* search */}
                    <Button size='lg' className=' font-medium p-4 bg-gray-500 text-white '>
                        Search
                    </Button>
                </div>

                {/* search */}
                <Button size='lg' className='bg-gradient-to-r w-44 from-sky-400 to-blue-500 font-medium p-4 text-white '>
                    Add new
                </Button>
            </div>
            <div className='bg-white p-10 m-6 rounded-3xl'>
                <table className="w-full ">
                    <thead>
                        <tr className="bg-gradient-to-r  from-sky-500 via-blue-500 to-indigo-500 text-left text-xs
                             font-semibold uppercase tracking-widest text-white">
                            <th className="px-5 py-3">No</th>
                            <th className="px-5 py-3">Name</th>
                            <th className="px-5 py-3">Email</th>
                            <th className="px-5 py-3">Phone No.</th>
                            <th className="px-5 py-3">Current Position</th>
                            <th className="px-5 py-3">Owner HR</th>
                            <th className="px-5 py-3">Status</th>
                            <th className="px-5 py-3">Action</th>
                            {/* <th className="px-5 py-3">Created at</th>
            <th className="px-5 py-3">Status</th> */}
                        </tr>
                    </thead>
                    <tbody className="text-gray-500">
                        {listForms?.map((item: any, index: any) => {

                            return (
                                <tr className={`hover:border-slate-400 border-2  cursor-pointer  `}>
                                    <td className="border-b border-gray-200  px-5 py-8 text-sm">
                                        <p className="whitespace-no-wrap">{index + 1}</p>
                                    </td>

                                    {/* name */}
                                    <td className="border-b border-gray-200  px-5 py-8 text-sm">
                                        <div className="flex items-center gap-3 justify-start">
                                            <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/9187/9187532.png?ga=GA1.1.1101431490.1697648101&semt=ais"
                                                alt={item?.name} />
                                            <p className="font-medium   text-xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400 
                                                      text-transparent bg-clip-text">
                                                {item?.name}
                                            </p>
                                        </div>
                                    </td>

                                    {/* phone */}
                                    <td className=" border-b border-gray-200  px-5 py-8 text-sm">
                                        <div className="flex items-center gap-3 justify-start">
                                            <img className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/10949/10949364.png?ga=GA1.1.1101431490.1697648101&semt=ais"
                                                alt='phone' />
                                            <p className="font-medium   text-xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400 
                                                      text-transparent bg-clip-text">
                                                {item?.phone}
                                            </p>
                                        </div>
                                    </td>
                                    {/* email */}
                                    <td className="border-b border-gray-200  px-5 py-8 text-sm">
                                        <div className="flex items-center gap-3 justify-start">

                                            <p className="font-medium   text-xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400 
                                                      text-transparent bg-clip-text">
                                                {item?.email}
                                            </p>
                                        </div>
                                    </td>


                                    {/* current_position */}
                                    <td className=" border-b border-gray-200  px-5 py-8 text-sm">
                                        <div className="flex items-center gap-3 justify-start">

                                            <p className="font-medium   text-xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400 
                                                      text-transparent bg-clip-text">
                                                {item?.current_position}
                                            </p>
                                        </div>
                                    </td>
                                    {/* owner-Hr */}
                                    <td className=" border-b border-gray-200  px-5 py-8 text-sm">
                                        <div className="flex items-center gap-3 justify-start">

                                            <p className="font-medium   text-xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400 
                                                      text-transparent bg-clip-text">
                                                {item?.owner_hr}
                                            </p>
                                        </div>
                                    </td>

                                    {/* status */}
                                    <td className=" border-b border-gray-200  px-5 py-8 text-sm">
                                        <div className="flex items-center gap-3 justify-start">

                                            <p className="font-medium   text-xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400 
                                                      text-transparent bg-clip-text">
                                                {item?.status}
                                            </p>
                                        </div>
                                    </td>
                                    {/* updated date*/}
                                    <td className=" border-b border-gray-200  px-5 py-8 text-sm">
                                        <div className="flex items-center gap-3 justify-start">

                                            <p className="font-medium   text-xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400 
                                                      text-transparent bg-clip-text">
                                                {item?.updated}
                                            </p>
                                        </div>
                                    </td>

                                    {/* updated date*/}
                                    <td className=" border-b border-gray-200  px-5 py-8 text-sm">
                                        <div className="flex items-center gap-3 justify-start">

                                            <p className="font-medium   text-xl bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-400 
                                                      text-transparent bg-clip-text">
                                                {item?.action}
                                            </p>
                                            {/* edit */}
                                            <td className="border-b px-5 py-8  relative flex justify-center items-center border-gray-200  text-sm">
                                                <img src="https://cdn-icons-png.flaticon.com/128/10337/10337458.png?ga=GA1.1.1101431490.1697648101&semt=ais" alt="edit btn"
                                                    className="p-2 w-14 h-14 mx-auto hover:scale-125"
                                                />
                                                {item?.action}
                                            </td>
                                            {/* delete */}
                                            <td className="border-b  border-gray-200  text-sm">
                                                <img src="https://cdn-icons-png.flaticon.com/128/10337/10337170.png?ga=GA1.1.1101431490.1697648101&semt=ais" alt="delete btn"
                                                    className="p-2 w-14 mx-auto h-14 hover:scale-125"
                                                />
                                                {item?.action}
                                            </td>
                                        </div>
                                    </td>


                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Candidate


export const SearchIcon = (props: any) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
        <path
            d="M22 22L20 20"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

