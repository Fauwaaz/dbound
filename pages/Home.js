"use client";

import { useState } from 'react'
import styles from '@/styles/HeroSection.module.css'
import { hover, motion } from "framer-motion"
import Link from 'next/link';
import Image from 'next/image';
import OurWorkAnimation from '@/app/components/OurWork';
import CardStackAnimation from '@/app/components/CardStackAnimation';
import CtaBeforeFooter from '@/app/components/CtaBeforeFooter';

const Home = () => {
    const [hovered, setHovered] = useState('left'); 

    return (
        <>
            <section className={styles.heroContainer}>
                <video autoPlay loop muted playsInline className={styles.videoBackground}>
                    <source src="/V1-Draft.mp4" type="video/mp4" />
                </video>

                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white to-transparent z-10"></div>

                <motion.div className='absolute top-50 z-20'
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    <Image
                        src={'/logo-1.png'}
                        alt={''}
                        width={500}
                        height={500}
                        unoptimized
                        quality={100}
                    />
                </motion.div>

                <div className="pb-[150px] text-gray-900 text-3xl w-[800px] text-center relative z-20">
                    <p>Your independent creative agency. We create strategic brands, campaigns and tech.</p>
                </div>
            </section>

            <section className="relative h-[500px]">
                <div className='flex flex-col gap-5 pb-[60px] px-5 lg:flex-row'>
                    <motion.div
                        onMouseEnter={() => setHovered('right')}
                        animate={{
                            flex: hovered === 'right' ? 0.7 : hovered === 'left' ? 0.415 : 0.5,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden rounded-2xl flex items-center"
                    >
                        <Link href="/projects">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-2xl w-full h-full object-cover"
                            >
                                <source src="/YC-Reel-LR.mp4" type="video/mp4" />
                            </video>
                        </Link>
                    </motion.div>

                    <motion.div
                        onMouseEnter={() => setHovered('left')}
                        animate={{
                            flex: hovered === 'left' ? 0.7 : hovered === 'right' ? 0.418 : 0.5,
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden rounded-2xl items-center"
                    >
                        <Link href="/projects">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="rounded-2xl w-full h-full object-cover"
                            >
                                <source src="/slowreel_wip_13jul10am_1.mp4.mp4" type="video/mp4" />
                            </video>
                        </Link>
                    </motion.div>
                </div>
            </section>

            <section className='Our_Work hidden lg:block'>
                <OurWorkAnimation />
                <div className='relative'>
                    <div className='our_logos -z-1'>
                        <div className='absolute left-[20%] top-0 rotate-[-6deg]'>
                            <div className='bg-[#d0ed97] py-5 px-4 max-w-[350px] rounded-full flex w-100 items-center justify-center'>
                                <Image
                                    src={'/LOGO-AHV-1.png'}
                                    width={250}
                                    height={100}
                                    quality={100}
                                    alt=''
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div className='absolute left-[30%] top-[300px] rotate-[8deg]'>
                            <div className='bg-[#bbbbd3] py-5 px-4 max-w-[350px] rounded-full flex w-100 items-center justify-center'>
                                <Image
                                    src={'/LOGO-AHV-1.png'}
                                    width={250}
                                    height={100}
                                    quality={100}
                                    alt=''
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div className='absolute left-[60%] top-[400px] rotate-[-4deg]'>
                            <div className='bg-[#da7e57] py-5 px-4 max-w-[350px] rounded-full flex w-100 items-center justify-center'>
                                <Image
                                    src={'/LOGO-AHV-1.png'}
                                    width={250}
                                    height={100}
                                    quality={100}
                                    alt=''
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
                    <div className='our_logos z-10'>
                        <div className='absolute left-[35%] top-[600px] rotate-[-6deg]'>
                            <div className='bg-[#84a7e8] py-5 px-4 max-w-[350px] rounded-full flex w-100 items-center justify-center'>
                                <Image
                                    src={'/LOGO-AHV-1.png'}
                                    width={250}
                                    height={100}
                                    quality={100}
                                    alt=''
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div className='absolute left-[55%] bottom-0 rotate-[8deg]'>
                            <div className='bg-[#d0d9d8] py-5 px-4 max-w-[350px] rounded-full flex w-100 items-center justify-center'>
                                <Image
                                    src={'/LOGO-AHV-1.png'}
                                    width={250}
                                    height={100}
                                    quality={100}
                                    alt=''
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='Our_Work_mob block lg:hidden'>
                <CardStackAnimation />
            </section>

            <section className='h-screen hidden lg:block'></section>
            <section className='h-screen hidden lg:block'></section>

            <section className='community-section'>
                <motion.div
                    onScroll={(e) => {
                        const scrollTop = e.currentTarget.scrollTop;
                        const scrollHeight = e.currentTarget.scrollHeight;
                        const clientHeight = e.currentTarget.clientHeight;
                        const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
                        const scale = 1 + (scrollPercentage / 100) * 0.2; // Scale from 1 to 1.2 based on scroll percentage
                        e.currentTarget.style.transform = `scale(${scale})`;
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}

                    className='gridContainer'
                >
                    <h2 className='text-8xl font-bold mb-4 roboto-condensed community-title'>Community & <br /> Health</h2>
                    <p className='smallTitle text-lg text-gray-500 mt-[50px]'>We create work shaped by today's most pressing challenges launching brands, programs, campaigns, and apps in collaboration with changemakers across government, councils, and the not-for-profit sector.</p>
                </motion.div>

                <div className='mt-4 flex flex-row items-center justify-center gridContainer'>
                    <motion.div className='community-a1 h-[650px] relative'
                        whileHover="hover"
                        initial="initial"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-2xl w-full h-full object-cover"
                        >
                            <source src="https://cdn.yourcreative.com.au/wp-content/uploads/2024/10/03044811/SMM-Case-Study-00-Thumbnail-3-Compressed.mp4" type="video/mp4" />
                        </video>
                        <motion.span className='bg-white py-2 px-4 rounded-full absolute top-4 left-4 uppercase text-[12px] font-bold shadow-md'
                            variants={{
                                initial: {
                                    opacity: 0,
                                    x: -10,
                                    scale: 1
                                },
                                hover: {
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                    transition: {
                                        duration: 0.1,
                                        ease: "easeIn"
                                    }
                                }
                            }}
                        >
                            Campaigns
                        </motion.span>
                        <p className='text-lg mt-1 text-gray-600'><strong className='text-black'>South Mumbai Market</strong> — Campaign for South Mumbai Market going plastic-free.</p>
                    </motion.div>
                    <motion.div className='community-a2 relative'
                        whileHover="hover"
                        initial="initial"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-2xl w-full h-full object-cover"
                        >
                            <source src="https://cdn.yourcreative.com.au/wp-content/uploads/2024/10/27035623/HEM_Video-Thumbnail-Compressed.mp4" type="video/mp4" />
                        </video>
                        <motion.span className='bg-white py-2 px-4 rounded-full absolute top-4 left-4 uppercase text-[12px] font-bold shadow-md'
                            variants={{
                                initial: {
                                    opacity: 0,
                                    x: -10,
                                    scale: 1
                                },
                                hover: {
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                    transition: {
                                        duration: 0.1,
                                        ease: "easeIn"
                                    }
                                }
                            }}
                        >
                            Motion Graphics
                        </motion.span>
                        <p className='text-lg mt-1 text-gray-600'><strong className='text-black'>Health Matters </strong> — Amplifying the voice of advocacy.</p>
                    </motion.div>
                    <motion.div className='community-a3 relative'
                        whileHover="hover"
                        initial="initial"
                    >
                        <Image
                            variants={{
                                initial: {
                                    scale: 1,
                                },
                                hover: {
                                    scale: 0.5,
                                     transition: {
                                        duration: 0.3,
                                        ease: "easeIn"
                                    }
                                }
                            }}
                            src="https://yourcreative.com.au/_next/image?url=https%3A%2F%2Fcdn.yourcreative.com.au%2Fwp-content%2Fuploads%2F2025%2F07%2F06031324%2FThumbnail-Image.jpg&w=1080&q=75"
                            alt="Community Image"
                            width={800}
                            height={600}
                            unoptimized
                            quality={100}
                            className="rounded-2xl w-full object-cover"
                        />
                        <motion.span className='bg-white py-2 px-4 rounded-full absolute top-4 left-4 uppercase text-[12px] font-bold shadow-md'
                            variants={{
                                initial: {
                                    opacity: 0,
                                    x: -10,
                                    scale: 1
                                },
                                hover: {
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                    transition: {
                                        duration: 0.1,
                                        ease: "easeIn"
                                    }
                                }
                            }}
                        >
                            Strategy
                        </motion.span>
                        <p className='text-lg mt-1 text-gray-600'><strong className='text-black'>Fresh Start</strong> — Co-designing a youth-led response to vaping prevention.</p>
                    </motion.div>
                </div>
            </section>

            <section className='sience-section mt-[150px]'>
                <div className='gridContainer'>
                    <h2 className='text-8xl font-bold mb-4 roboto-condensed community-title'>Science & <br /> Innovation</h2>
                    <p className='smallTitle text-lg text-gray-500 mt-[50px]'>We tackle complex projects that demand thoughtful communication design—from AI and innovation initiatives to GPU cloud computing, carbon reduction, circular economy solutions, and biotech.</p>
                </div>

                <div className='mt-4 flex flex-row items-center justify-center gridContainer'>
                    <motion.div
                        className='science-a1 relative cursor-pointer'
                        whileHover="hover"
                        initial="initial"
                    >
                        <Image
                            src="https://yourcreative.com.au/_next/image?url=https%3A%2F%2Fyc24.yourcreative.com.au%2Fwp-content%2Fuploads%2F2023%2F07%2FColabs_Hero-Image2-1536x907.jpg&w=1080&q=75"
                            alt="Community Image"
                            width={800}
                            height={600}
                            unoptimized
                            quality={100}
                            className="rounded-2xl w-full object-cover"
                        />

                        <motion.span
                            className='bg-white py-2 px-4 rounded-full absolute top-4 left-4 uppercase text-[12px] font-bold shadow-md'
                            variants={{
                                initial: {
                                    opacity: 0,
                                    x: -10,
                                    scale: 1
                                },
                                hover: {
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                    transition: {
                                        duration: 0.1,
                                        ease: "easeIn"
                                    }
                                }
                            }}
                        >
                            Strategy
                        </motion.span>

                        <p className='text-lg mt-4 text-gray-600'>
                            <strong className='text-black'>Fresh Start</strong> — Co-designing a youth-led response to vaping prevention.
                        </p>
                    </motion.div>

                    <motion.div className='science-a2 relative'
                        whileHover="hover"
                        initial="initial"
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="rounded-2xl w-full h-full object-cover shadow-sm"
                        >
                            <source src="https://cdn.yourcreative.com.au/wp-content/uploads/2024/11/13052037/SMC_Case-Study_00-1.mp4" type="video/mp4" />
                        </video>
                        <motion.span className='bg-white py-2 px-4 rounded-full absolute top-4 left-4 uppercase text-[12px] font-bold shadow-md'
                            variants={{
                                initial: {
                                    opacity: 0,
                                    x: -10,
                                    scale: 1
                                },
                                hover: {
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                    transition: {
                                        duration: 0.1,
                                        ease: "easeIn"
                                    }
                                }
                            }}
                        >
                            Web Design & Development
                        </motion.span>
                        <p className='text-lg mt-1 text-gray-600'><strong className='text-black'>Sustainable Metal Cloud </strong> — Amplifying the voice of advocacy.</p>
                    </motion.div>
                </div>
            </section>

            <CtaBeforeFooter />
        </>
    )
}

export default Home 