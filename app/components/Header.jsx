import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image src={assets.profile_img} alt='' className='rounded-full mt-28 w-32' />
            </div>
            <h3
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>
                Hello! I am Emmanuel <Image src={assets.hand_icon} alt='' className='w-6' />
            </h3>
            <h1
                className='text-3xl sm:text-6xl flex text-center lg:text-[66px] font-ovo'>
                frontend web developer based in Ghana
            </h1>
            <p>I am a frontend web developer reaching 2 years of experience in web development, working on feature projects like e-commerce web-apps and more</p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact"
                    className='px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2'>
                    Contact me <Image src={assets.right_arrow} alt='' className='w-4' />
                </a>
                <a href="/public/sample-resume.pdf" download
                    className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                    My resume <Image src={assets.download_icon} alt='' className='w-4' />
                </a>
            </div>
        </div>
    )
}

export default Header
