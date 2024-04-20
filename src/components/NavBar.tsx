"use client"
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, User, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { IoIosLogOut } from "react-icons/io";

const NavBar = () => {
    return (
        <div className="flex  bg-gradient-to-r from-sky-300 to-blue-300 bg-indigo-300 
        p-4  items-center justify-between ">
            <p className="font-bold text-white text-3xl">DASHBOARD</p>
            <div className="flex items-center gap-4">
                <Dropdown placement="bottom-start">
                    <DropdownTrigger>
                        <User
                            className=" bg-slate-100 rounded-full p-2 px-6"
                            name="Jane Doe"
                            description="tonyreichert"
                            avatarProps={{
                                src: "https://cdn-icons-png.freepik.com/256/4945/4945750.png?ga=GA1.1.1725227974.1708702988&semt=ais_hybrid"
                            }}
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="User Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-bold">Signed in as</p>
                            <p className="font-bold">@tonyreichert</p>
                        </DropdownItem>
                        <DropdownItem key="settings">
                            My Settings
                        </DropdownItem>
                        <DropdownItem key="team_settings">Team Settings</DropdownItem>
                        <DropdownItem key="analytics">
                            Analytics
                        </DropdownItem>
                        <DropdownItem key="system">System</DropdownItem>
                        <DropdownItem key="configurations">Configurations</DropdownItem>
                        <DropdownItem key="help_and_feedback">
                            Help & Feedback
                        </DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </div>
    );
}


export default NavBar