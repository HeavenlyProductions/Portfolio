'use client'
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { useThemeContext } from '@/context/context'

const Navbar = () => {
    const { theme, changeTheme, isMounted } = useThemeContext()

    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();
    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className={`fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] 
            ${theme === "dark"
                    && isMounted ? "hidden" : ""}`}>
                <Image alt='' src={assets.header_bg_color} className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between
             items-center z-50 ${isScroll ? "  bg-transparent backdrop-blur-lg shadow-sm"
                    : ""} ${theme === "dark" && !isScroll && isMounted ?
                        "darkTheme shadow-white/20" : ""}`}>
                <a href="#top">
                    <Image src={theme === 'dark' && isMounted ? assets.logo_dark : assets.logo}
                        alt='image' className='w-28 cursor-pointer mr-14' />
                </a>
                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
                 ${isScroll ? "" : (theme === 'light' && isMounted ? "bg-white shadow-sm" : "shadow-sm")} 
                 ${theme === 'dark' && isMounted ? " border border-white/50 bg-transparent" : ""}`}>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About me</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#work">My Work</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact me</a></li>
                </ul>
                <div className='flex items-center gap-4 p-3'>
                    <button onClick={() => changeTheme()}>
                        {isMounted &&
                            <Image src={theme === 'dark' ? assets.sun_icon : assets.moon_icon}
                                alt='' className='w-6 transition duration-200' />}
                    </button>
                    <a className={`hidden lg:flex items-center gap-3 px-10 py-2.5 border 
                    border-gray-500 rounded-full ml-4 ${theme === 'dark' ? 'border-white/50' : ''}`}
                        href="#contact">
                        Contact <Image src={assets.arrow_icon} alt='arrow' className='w-3' /></a>
                    <button onClick={openMenu}>
                        <Image src={theme === 'dark' ? assets.menu_white : assets.menu_black} alt=''
                            className={'w-6 hidden max-sm:flex'} />
                    </button>
                </div>

                {/* -- ---- mobile menu ---- -- */}

                <ul ref={sideMenuRef} className={`hidden max-sm:flex flex-col gap-4 py-20 px-10 fixed
                 -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500
                 ${theme === 'dark' ? 'bg text-white' : ''}`}>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={theme === 'dark' ? assets.close_white : assets.close_black}
                            alt='' className='w-5 cursor-pointer' />
                    </div>

                    <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#work">My Work</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
