import React from 'react'
import { motion } from 'framer-motion'
import AnimateLeft from '../components/AnimateLeft'
import AnimateRight from '../components/AnimateRight'

const About = () => {
    return (
        <section className="w-full h-auto bg-[#181c23] text-white px-10 relative z-0 pt-28" id="about">

            <div className="lg:block hidden">
                <img src="/webspider.png" alt="WebSpider" className="absolute left-0 top-0" />
                <img src="/web.png" alt="WebSpider" className="absolute right-0 top-0" />
            </div>

            <div className="max-w-[1500px] w-full mx-auto flex items-center justify-center py-20 gap-x-20 relative lg:flex-row flex-col gap-y-20 text-center lg:text-left">

                <div className="relative z-10">
                    <AnimateLeft>
                        <h1 className='font-zombie lg:text-8xl sm:text-6xl text-5xl glow'>ABOUT ZOMBIE SUI</h1>
                    </AnimateLeft>

                    <AnimateLeft>
                        <p className="max-w-[30rem] mt-5 font-poppins">
                            Suizombie is an innovative project that combines the exciting world of gaming and the popular trend of NFTs &#40;non-fungible tokens&#41; with the unique concept of zombies. With its token ZBS running on the SUI Chain, Suizombie has created a one-of-a-kind ecosystem of games and lotteries that revolve around NFT zombies.
                        </p>
                    </AnimateLeft>

                    <AnimateLeft>
  <a href="https://suizombie.gitbook.io/zombiesui-whitepaper/">
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-purple-500 hover:bg-purple-600 transition-all duration-200 ease-in-out px-6 py-3 rounded-lg mt-5 font-poppins text-white relative overflow-hidden glow">
      Whitepaper
      <span className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" fillRule="evenodd">
            <circle fill="#A78BFA" cx="45" cy="55" r="30" />
            <circle fill="#8B5CF6" cx="85" cy="120" r="45" />
            <circle fill="#D53F8C" cx="130" cy="55" r="20" />
          </g>
        </svg>
      </span>
    </motion.button>
  </a>
</AnimateLeft>
                </div>

                <AnimateRight>
                    <div className="relative">
                        <img src="/about.webp" alt="About" className="w-full md:w-[24rem]" />
                    </div>
                </AnimateRight>

                <div className="bg-white/10 w-[15rem] h-[15rem] blur-[6rem] rounded-full absolute left-0 top-[15rem]"></div>

            </div>

        </section>
    )
}

export default About
