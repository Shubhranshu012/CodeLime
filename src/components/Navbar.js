"use client"
import gsap from 'gsap';
import React, { useState } from 'react';
import { useEffect } from 'react';

function Navbar() {
    useEffect(() => {
        // GSAP animation after component mounts
        gsap.to(".image-nav", {
            rotation: 360,        // Rotate 360 degrees
            duration: 1,          // Duration of the spin (1 second)
            repeat: -1,           // Infinite loop
            repeatDelay: 5,       // Delay before repeating the animation (5 seconds)
            ease: "none",         // No easing for smooth continuous rotation
          });
      }, []);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    return (
        <nav className="h-[10vh] bg-[#0F0F0F] border-gray-200 dark:border-gray-600 dark:bg-gray-900 z-40">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-[9px]">
                <a href="/Temp" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="Logo1.png" className="image-nav h-8 mt-[5px]" alt="CodeLIme Logo" />
                    <span className="self-center text-2xl  font-semibold whitespace-nowrap text-[#FFFCE1]">CodeLime</span>
                </a>
                <button
                    onClick={toggleMenu}
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mega-menu-full"
                    aria-expanded={isMenuOpen}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div id="mega-menu-full" className={`${isMenuOpen ? 'flex' : 'hidden'} items-center justify-between font-medium w-full md:flex md:w-auto z-40 bg-black`}>
                    <ul className="text-[#fffce1c7] flex flex-col p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="/Temp" className="block py-2 px-3 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
                        </li>
                        <li className="relative">
                            <button
                                onClick={toggleDropdown}
                                className="flex items-center justify-between w-full py-2 px-3 rounded md:w-auto  md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            >
                                Compiler's
                                <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </button>
                            {/* Dropdown Menu */}
                            <div className={`${isDropdownOpen ? 'block' : 'hidden'} mt-1 border-gray-200 shadow-sm bg-gray-50 md:bg-white border-y dark:bg-gray-800 dark:border-gray-600 absolute left-0 w-60 text-[#000000] z-50`}>
                                <div className="grid max-w-screen-xl px-4 py-5 mx-auto dark:text-white sm:grid-cols-2 md:px-6">
                                    <ul>
                                        <li>
                                            <a href='/Compiler?Language=c%2B%2B' className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <div className="font-semibold">C++ Compiler</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/Compiler?Language=python' className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <div className="font-semibold">Python Compiler</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/Compiler?Language=c' className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <div className="font-semibold">C Compiler</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/Compiler?Language=c%23' className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <div className="font-semibold">C# Compiler</div>
                                            </a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <a href="/HtmlRun" className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <div className="font-semibold">Html Compiler</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/Compiler?Language=rust' className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <div className="font-semibold">Rust Compiler</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/Compiler?Language=java' className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <div className="font-semibold">Java Compiler</div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='/Compiler?Language=js' className="block p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
                                                <div className="font-semibold">JavaScript Compiler</div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li>
                            <a href="/" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Pratice</a>
                        </li>
                        <li>
                            <a href="https://github.com/Shubhranshu012" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
            <hr class="w-[90vw] mx-auto border-t-0.5 border-gray-400" />
        </nav>
    );
}

export default Navbar;
