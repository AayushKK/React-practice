import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';


import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';


const Header = () => {

  const [menu, setMenu] = useState(false);
  const menubar = () => {
    setMenu(!menu);
  }

  const closeMenu = () => {
    setMenu(false);
  }
  return (
    <>
      <div className="bg-black text-white px-[5%]  py-1 flex items-baseline justify-between sm:flex-col sm:flex-wrap sm:px-[10%]">
        <NavLink to={'/'} onClick={closeMenu}> <h1 className="text-2xl  ">Tailwind</h1></NavLink>


        <nav className={` ${menu ? 'sm:flex flex-col mt-4 flex-wrap align-baseline justify-start' : 'sm:hidden'}
          }`}>

          <Link to={'/about'} onClick={closeMenu} className='text-md hover:bg-white hover:text-black px-4 py-2 '>About</Link>
          <NavLink to={'/contact'} onClick={closeMenu} className='text-md hover:bg-white hover:text-black px-4 py-2 '>Contact</NavLink>

        </nav>
        <FontAwesomeIcon
          icon={menu ? faClose : faBars}
          size="2x"
          color="white"
          className="hidden sm:block cursor-pointer absolute right-5 top-1"
          onClick={menubar}
        />
      </div>
    </>
  )
}
export default Header