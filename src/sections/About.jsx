import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import { useMediaQuery } from 'react-responsive'
import Button from '../components/Button'

const About = () => {

    const [copy, setCopy] = useState(false)
    const [copyNumber, setCopyNumber] = useState(false)

    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 768 });

    const handleCopy = () => {
        navigator.clipboard.writeText('hrishabhjoshi123@gmail.com')
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 2000)
    }

    const handleCopyNumber = () => {
        navigator.clipboard.writeText('9711976595')
        setCopyNumber(true)
        setTimeout(() => {
            setCopyNumber(false)
        }, 2000)
    }

    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                {/* Profile Image Section */}
                <div className='col-span-1'>
                    <div className='grid-container'>
                        <img src="/assets/pfp.png" alt="grid-1" className='w-full sm:h-[276px] h-auto object-contain' />
                        <div>
                            <p className='grid-headtext'>Hi, I am Hrishabh Joshi</p>
                            <p className='grid-subtext'>A web developer skilled in front-end and back-end technologies like React, Node.js, Java, and Tailwind CSS. I enjoy building dynamic, responsive web applications and solving coding challenges in Data Structures and Algorithms. Currently, I'm exploring Spring Boot and Android development to enhance my full-stack capabilities.</p>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Section */}
                <div className='col-span-1'>
                    <div className='grid-container'>
                        <p className='grid-headtext'>Tech Stack</p>
                        <div className='grid-subtext'>
                            <ul className='flex flex-col gap-3 justify-center'>
                                <li>Primary Techstack And tools:
                                    <ul className='flex flex-wrap gap-1 items-center'>
                                        {/* Tech stack items */}
                                        <li className='flex flex-col items-center justify-center m-3'>
                                            <img src="/assets/logos/react.webp" alt="" className='h-10' />React
                                        </li>
                                        <li className='flex flex-col gap-3 items-center justify-center m-3'><img src="/assets/logos/node.webp" alt="" className='h-10' />NodeJs </li>
                                        <li className='flex flex-col gap-3 items-center justify-center m-3'><img src="/assets/logos/mongodb.webp" alt="" className='h-10' />MongoDB </li>
                                        <li className='flex flex-col gap-3 items-center justify-center m-3'><img src="/assets/logos/tailwind.webp" alt="" className='h-10' />Tailwind </li>
                                        <li className='flex flex-col gap-3 items-center justify-center m-3'><img src="/assets/logos/express.webp" alt="" className='h-10 invert' />ExpressJS </li>
                                        <li className='flex flex-col gap-3 items-center justify-center m-3'><img src="/assets/logos/postman.svg" alt="" className='h-10' />Postman </li>
                                        <li className='flex flex-col gap-3 items-center justify-center m-3'><img src="/assets/logos/git.webp" alt="" className='h-10' />GIT</li>
                                    </ul>
                                </li>
                                <li>Also Familiar with:
                                    <ul className='flex flex-wrap gap-1 items-center'>
                                        <li className='flex flex-col items-center justify-center m-3'>
                                            <img src="/assets/logos/java.png" alt="" className='h-10' />Java
                                        </li>
                                        <li className='flex flex-col gap-3 items-center justify-center m-3'><img src="/assets/logos/springboot.png" alt="" className='h-10' />SpringBoot</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Extra Section (hello world) */}
                <div className="col-span-1 ">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">I am based in Delhi, India &#x1F4CD;</p>
                            <p className="grid-subtext">I am open to work remotely across most of the timezones.</p>
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                        </div>
                    </div>
                </div>

                <div className='col-span-1 xl:col-span-2 '>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="grid 3" className='w-full sm:h-[266px] h-fit object-contain' />
                        <p className='grid-headtext'>My Goals and Intrests</p>
                        <div className='grid-subtext'>
                            <ul className='flex flex-col gap-2'>
                                <li>
                                    <span className='grid-headtext text-sm' style={{ fontSize: '1rem' }}>Master Full-Stack Development:</span> Aim to become proficient in both frontend and backend technologies.s.
                                </li>
                                <li>
                                    <span className='text-sm grid-headtext ' style={{ fontSize: '1rem' }}>Learn Java Spring Boot:</span> Explore Spring Boot to build efficient RESTful services.
                                </li>
                                <li>
                                    <span className='grid-headtext text-sm' style={{ fontSize: '1rem' }}>Develop AI-Driven Applications:</span> Gain knowledge in AI to create innovative applications.
                                </li>
                                <li>
                                    <span className='grid-headtext text-sm' style={{ fontSize: '1rem' }}>Contribute to Open Source:</span> Collaborate on open-source projects to enhance skills and give back to the community.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='col-span-1'>
                    <div className="grid-container">
                        <img src="/assets/contact-me-telephone.webp" alt="Contact me" className='w-full md:h-[126px] sm:h-[276px] xl:h-fit object-cover sm:object-top' />
                        <div className='space-y-2'>

                            <p className='grid-headtext text-center'>Contact me</p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={copy ? "/assets/tick.svg" : "/assets/copy.svg"} alt="" />
                                <p className='lg:text-2xl md:text-xl text-gray_gradient text-white'>hrishabhjoshi123@gmail.com</p>
                            </div>
                            <div className='copy-container' onClick={handleCopyNumber}>
                                <img src={copyNumber ? "/assets/tick.svg" : "/assets/copy.svg"} alt="" />
                                <p className='lg:text-2xl md:text-xl text-gray_gradient text-white'>9711976595</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default About
