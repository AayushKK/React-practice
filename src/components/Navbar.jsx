
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className=' flex flex-row items-center py-3 shadow bg-orange-500'>
      <div className='w-1/3 '>
        <FontAwesomeIcon icon={faClock} size="xl" color='white' />
      </div>
      <div className='w-2/3 flex flex-row gap-8 items-center text-white text-2xl'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;