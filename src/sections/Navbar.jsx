import { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { navItems } from '.';


const NavItems = ({toggleMenu}) => {
    return (
        <ul className="nav-ul">
        {navItems.map(({ label, path }, index) => (
          <li key={index} className="nav-li">
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? "active-class" : "inactive-class")}
              onClick={toggleMenu}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    );
};



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <header className='text-white fixed top-0 left-0 right-0 z-50 bg-black/90'>
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <NavLink to="/" className="text-neutral-400 font-bold text-xl hover:text-white">
                        Hrishabh Joshi
                    </NavLink>
                    <button onClick={toggleMenu} className='text-neutral-400 hover:text-white focus:outline-none sm:hidden flex ' aria-label='Toggle menu'>
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle btn" className="h-6 w-6" />
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>
            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className='p-5'>
                <NavItems toggleMenu={toggleMenu}/>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
