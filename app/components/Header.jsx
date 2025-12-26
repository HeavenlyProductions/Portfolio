import { assets } from '@/assets/assets'
import { useThemeContext } from '@/context/context'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
    const { theme } = useThemeContext();
    return (
        <div className='w-11/12 max-w-3xl mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'string', stiffness: 100 }}
            >
                <Image src={assets.profile_img} alt='' className='rounded-full mt-28 w-32' />
            </motion.div>
            <motion.h3
                className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'
                initial={{ y: -20, opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                Hello! I am Emmanuel <Image src={assets.hand_icon} alt='' className='w-6' />
            </motion.h3>
            <motion.h1
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className='text-3xl sm:text-6xl flex text-center lg:text-[66px] font-ovo'>
                frontend web developer based in Ghana
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className='text-center'>I am a frontend web developer with 2 years
                of experience in web development, working on feature projects like
                e-commerce web-apps and more
            </motion.p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    href="#contact"
                    className={`px-10 py-3 border rounded-full border-white bg-black 
                    text-white flex items-center gap-2 ${theme === 'dark' ? 'bg-transparent' : ''}`}>
                    Contact me <Image src={assets.right_arrow} alt='' className='w-4' />

                </motion.a>
                <motion.a
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    href="/public/sample-resume.pdf" download
                    className={`px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2
                    bg-white ${theme === 'dark' ? 'text-black' : ''}`}>
                    My resume <Image src={assets.download_icon} alt='' className='w-4' />
                </motion.a>
            </div>
        </div>
    )
}

export default Header
