import { useState } from 'react';
import { myProjects } from './index'
import { NavLink } from 'react-router-dom';

const Projects = () => {
    const [projectIndex, setProjectIndex] = useState(0);
    const currentProject = myProjects[projectIndex];
    const projectCount = myProjects.length;
    const handleNavigation = (direction) => {
        setProjectIndex((prevIndex) => {
            if (direction === 'previous') {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    };

    return (
        <section className='c-space my-20' id='projects'>
            <p className='head-text'>My Projects</p>
            <div className='grid lg:grid-col-2 grid-col-1 mt-12 w-full'>
                <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                    <div className='absolute top-0 right-0'>
                        <img src={currentProject.spotlight} alt="Spotlight" className='w-full h-96 object-cover rounded-xl' />
                    </div>
                    <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt="Logo" className='w-10 h-10 shadow-sm' />
                    </div>
                    <div className='flex flex-col gap-5 text-white-600 my-5'>
                        <p className='text-white text-2xl font-semibold animatedText'>{currentProject.title}</p>
                        <p className='paragraph-semibold'>{currentProject.desc}</p>
                        <ul className='flex flex-col gap-2'>
                            {Array.isArray(currentProject.subdesc) ? (
                                currentProject.subdesc.map((feature, index) => (
                                    <li key={index} className="animatedText list-disc">{feature}</li>
                                ))
                            ) : (
                                <li className="animatedsubText">{currentProject.subdesc}</li>
                            )}
                        </ul>

                    </div>
                    <div className='flex items-center justify-between flex-wrap gap-5'>
                        <div className='flex items-center gap-3'>
                            {currentProject.tags.map((tag, index) => (
                                <div key={index} className='tech-logo'>
                                    <img src={tag.path} alt='Tech Logo' />
                                </div>
                            ))}
                        </div>
                        <NavLink to={currentProject.href} className='flex items-center cursor-pointer gap-2 text-white-600 z-10'>View Project
                            <img src="/assets/arrow-up.png" alt="up arrow" className='cursor-pointer' />
                        </NavLink>
                    </div>
                    <div className='flex justify-between items-center mt-7'>
                        {/* Wrap handleNavigation in an arrow function to prevent immediate invocation */}
                        <button className='arrow-btn ' onClick={() => handleNavigation('previous')}> <img src="/assets/left-arrow.png" alt="Left navigation arrow" /> </button>
                        <NavLink
                            to='/#projects'
                            >
                        <button className='arrow-btn' onClick={() => handleNavigation('next')} > <img src="/assets/right-arrow.png" alt="Left navigation arrow" /> </button>

                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;
