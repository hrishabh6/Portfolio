<section className='c-space my-20'>
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
                <p className='grid-subtext'>
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
                </p>
            </div>
        </div>

        {/* Extra Section (hello world) */}
        <div className='col-span-1'>
            <div className='grid-container'>
                <div className='rounded-3xl w-full sm:h-[326px] h-auto flex justify-center items-center'>
                    hello world
                </div>
            </div>
        </div>
    </div>
</section>
