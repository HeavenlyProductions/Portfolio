import { assets, serviceData } from '@/assets/assets'
import { useThemeContext } from '@/context/context'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Services = () => {

    const { theme } = useThemeContext();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id='services' className='w-full px-[12%] py-10 scroll-mt-20'>

            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-ovo'>What I offer
            </motion.h4>

            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-ovo'>My Services
            </motion.h2>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                I am an experienced frontend developer with over two years of expertise
                in the field. Throughout my career I have picked up many programming
                tools that prove useful in developing many modern web-apps efficiently.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className='grid auto gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className={`border border-gray-400 rounded-lg px-8 py-12 black lightHover
                     hover:-translate-y-1 duration-300 ${theme === 'dark' ? 'darkHover white' : ''}`}
                        key={index}>
                        <Image src={icon} alt={title} className='w-10' />
                        <h3 className={`text-lg my-4 text-gray-700 ${theme === 'dark' ?
                            'text-white' : ''}`}>{title}</h3>
                        <p className={`text-sm text-gray-600 leading-5 
                            ${theme === 'dark' ? 'text-white/80' : ''}`}>{description}</p>
                        <a className='flex items-center gap-2 text-sm mt-5' href={link}>
                            Read more <Image src={assets.right_arrow} alt='' className='w-4' />
                        </a>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div >
    )
}

export default Services
