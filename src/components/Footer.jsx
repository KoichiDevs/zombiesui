import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const Footer = () => {

    return (
        <footer className='bg-[#241402] flex flex-col w-full text-white font-poppins'>
            <div className="w-full">
                <div className="max-w-[1500px] mx-auto relative flex flex-col md:flex-row gap-y-2 justify-between items-center opacity-70 py-6 px-8 md:px-10">
                    <p className='text-lg'>contact@zombiesui.com</p>
                    <div className="flex items-center justify-center gap-x-4">
                        <a href="https://twitter.com/zombiesui?s=21&t=YsJcPnQlJmm8EkTwcBtdkA" className="" rel="noopener noreferrer" target="_blank">
                            <BsTwitter className='cursor-pointer hover:text-3xl transition-all ease-in-out duration-200 text-2xl' />
                        </a>

                        <a href="https://discord.com/invite/zombiesui" className="" rel="noopener noreferrer" target="_blank">
                            <FaDiscord className='cursor-pointer hover:text-3xl transition-all ease-in-out duration-200 text-2xl' />
                        </a>

                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer