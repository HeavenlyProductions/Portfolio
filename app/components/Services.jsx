import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-ovo'>What I offer</h4>
            <h2 className='text-center text-5xl font-ovo'>My Services</h2>
            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
                I am an experienced frontend developer with over two years of expertise
                in the field. Throughout my career I have picked up many programming
                tools that prove useful in developing many modern web-apps efficiently.
            </p>
            <div className='grid auto gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div className='border border-gray-400 rounded-lg px-8 py-12 black lightHover hover:-translate-y-1 duration-300' key={index}>
                        <Image src={icon} alt={title} className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>{description}</p>
                        <a className='flex items-center gap-2 text-sm mt-5' href={link}>
                            Read more <Image src={assets.right_arrow} alt='' className='w-4' />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
