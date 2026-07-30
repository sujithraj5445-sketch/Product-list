import React from "react";
import { FaShoppingBag, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";


const NavbarMenu = [
    {
        id: 1,
        title: "HOME",
        link: "/",
    },
    {
        id: 2,
        title: "PRODUCTS",
        link: "#",
    },
    {
        id: 3,
        title: "SHOP",
        link: "#",
    },
];

const Navbar = ({search, setSearch}) => {
    return (
        <nav className="bg-linear-to-r from-purple-600 to-indigo-600 shadow-md">
            <div className="container mx-auto flex items-center justify-between py-4 px-6">

                {/* Logo */}
                <div className="flex items-center gap-2 text-2xl font-bold text-amber-900">
                    <FaShoppingBag className="text-green-700" />
                    <h1>SHOPSY APP</h1>
                </div>
                

                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="text"
                        value={search}
                        onChange={(e)=> setSearch(e.target.value)}
                        placeholder="Search for Products, Brands and More"
                        className=" lg:w-100 sm:w-85 pl-10 pr-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                </div>

                {/* Menu */}
                <ul className="hidden md:flex items-center gap-6 text-lg font-medium text-white/90">
                    {NavbarMenu.map((menu) => (
                        <li key={menu.id}>
                            <a
                                href={menu.link}
                                className="hover:text-white transition duration-300"
                            >
                                {menu.title}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="relative cursor-pointer">
                    <FaCartShopping className="text-3xl text-white hover:text-yellow-300" />

                    {/* Cart Count */}
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                        0
                    </span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;