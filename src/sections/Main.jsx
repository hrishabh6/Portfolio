import Button from '../components/Button';
import { NavLink } from 'react-router-dom';


const Main = () => {
  
  return (
    <>
      <section className="h-[50vh] w-full flex flex-col justify-between" id="home">
        {/* Text Section */}
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10 ">
          <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
            Hi, I am Hrishabh Joshi <span className="waving-hand">👋</span>
          </p>
          <p className="hero_tag text-gray_gradient">Building Efficient Websites</p>
        </div>

        
        
        

        {/* Button Section */}
        <div className=" w-full z-20 c-space">
          <NavLink to="#contact" className="w-fit">
            <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
          </NavLink>
        </div>
      </section>



    </>
  );

}

export default Main;
