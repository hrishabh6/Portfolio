import Button from '../components/Button';
import { NavLink } from 'react-router-dom';


const Main = () => {
  

  return (
    <>
      <section className="relative min-h-screen w-full flex flex-col" id="home">
        {/* Text Section */}
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10 relative">
          <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
            Hi, I am Hrishabh Joshi <span className="waving-hand">👋</span>
          </p>
          <p className="hero_tag text-gray_gradient">Building Efficient Websites</p>
        </div>

        {/* Background Video */}
        <div className="w-full h-full absolute inset-0 z-0">
          <video
            className="w-full mx-auto h-full object-cover"
            src="/assets/Bgv.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

        </div>
        

        {/* Button Section */}
        <div className="absolute bottom-7 left-0 right-0 w-full z-20 c-space">
          <NavLink to="#contact" className="w-fit">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
          </NavLink>
        </div>
      </section>



    </>
  );

}

export default Main;
