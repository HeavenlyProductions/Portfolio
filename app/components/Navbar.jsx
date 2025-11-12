import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image alt='' src={assets.header_bg_color} className='w-full' />
        </div>
            <nav className='w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50'>
                <a href="#top">
                    <Image src={assets.logo} alt='image' className='w-28 cursor-pointer mr-14' />
                </a>
                <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 shadow-sm bg-opacity-50'>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About me</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#work">My Work</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact me</a></li>
                </ul>
                <div className='flex items-center gap-4 p-3'>
                    <button>
                        <Image src={assets.moon_icon} alt='' className='w-6' />
                    </button>
                    <a className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4' href="#contact">Contact <Image src={assets.arrow_icon} alt='arrow' className='w-3' /></a>
                <button>
                    <Image src={assets.menu_black} alt='' className='w-6 hidden max-sm:flex' />
                </button>
                </div>

            {/* -- ---- mobile menu ---- -- */}

            <ul className='hidden max-sm:flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                    
                    <div className='absolute right-6 top-6'>
                        <Image src={assets.close_black} alt='' className='w-5 cursor-pointer' />
                    </div>
                    
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About me</a></li>
                    <li><a className='font-Ovo' href="#services">Services</a></li>
                    <li><a className='font-Ovo' href="#work">My Work</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
