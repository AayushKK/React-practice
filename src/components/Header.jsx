import { NavLink } from "react-router"


const Header = () => {
  return (

    <div className="bg-black text-white px-10 py-3 flex items-baseline justify-between">
      <NavLink to={'/'}> <h1 className="text-2xl ">Tailwind</h1></NavLink>

      <nav className="space-x-4 sm:hidden">

        <NavLink to={'/about'} className='text-md hover:bg-white hover:text-black px-2 py-2 '>About</NavLink>
        <NavLink to={'/about'} className='text-md hover:bg-white hover:text-black px-2 py-2 '>Contact</NavLink>

      </nav>
    </div>

  )
}
export default Header