import { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
import { mySkills, stillLearning } from '.'
import {Link, NavLink} from 'react-router-dom'

const About = () => {

    const [copy, setCopy] = useState(false)
    const [copyNumber, setCopyNumber] = useState(false)



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
        <section className='flex c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                {/* Profile Image Section */}
                <div className="col-span-1">
                    <div className="grid-container">
                        {/* Centered image container */}
                        <div className="flex justify-center">
                            <img
                                src="/assets/pfpb.jpg"
                                alt="Hrishabh's Avatar"
                                className="w-40 h-40 sm:w-52 sm:h-52 object-cover rounded-full border-4 border-zinc-700 shadow-md"
                            />
                        </div>

                        {/* Centered text content */}
                        <div className="text-center flex-1">
                            <p className="text-xl sm:text-2xl font-semibold text-white mb-3">
                                Hi, I&#39;m <span className="text-purple-400">Hrishabh Joshi</span>
                            </p>
                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                                Full Stack Developer focused on building performant, scalable, and production-ready backend systems.
                                Experienced in Java, Spring Boot microservices, AI integrations, real-time communication, and deployment pipelines.
                                Passionate about clean architecture, developer efficiency, and solving real-world challenges.
                            </p>
                        </div>

                        {/* Centered button */}

                                <a  target="_blank" rel="noopener noreferrer" href={`https://drive.google.com/file/d/1dXfjGPPC56bU68ju67fKE7vJ1FYVxQlp/view?usp=sharing`}>
                                    <Button name="See My Resume" isBeam containerClass="w-full mt-10" />
                                </a>

                    </div>
                </div>


                {/* Tech Stack Section */}
                <div className='col-span-1'>
                    <div className='grid-container'>
                        <p className='grid-headtext'>Tech Stack</p>
                        <div className='grid-subtext'>
                            <ul className='flex flex-col gap-3 justify-center'>
                                <li>Primary Techstack And tools:
                                    <ul className="flex flex-wrap gap-1 items-center">
                                        {mySkills.map(({ skill, icon, invert }, index) => (
                                            <li key={index} className="flex flex-col items-center justify-center m-3 md:max-w-14  flex-wrap">
                                                <img src={icon} alt={skill} className={`h-10 ${invert ? "invert" : ""}`} />
                                                <span>{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li>Also Familiar with:
                                    <ul className="flex flex-wrap gap-1 items-center">
                                        {stillLearning.map(({ skill, icon, rounded, inverted }, index) => (
                                            <li key={index} className="flex flex-col items-center justify-center m-3 gap-1">
                                                <img src={icon} alt={skill} className={`h-10 ${rounded ? "rounded-xl" : ""} ${inverted ? "invert" : ""}`} />
                                                <span>{skill}</span>
                                            </li>
                                        ))}
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
                            <NavLink to={`/#contact`}><Button name="Contact Me" isBeam containerClass="w-full mt-10" /></NavLink>
                            
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
