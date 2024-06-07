import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/theme/themeSlice";
import { Button } from "../ui/moving-border";

function Header() {
  const path = useLocation().pathname;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  return (
    <Navbar
      fluid
      className='bg-gray-400 sticky top-3 mx-14 rounded-2xl md:rounded-full opacity-85 z-40'
    >
      <NavbarBrand href='https://flowbite-react.com'>
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white pl-10'>
          ChainTech™
        </span>
      </NavbarBrand>
      <div className='flex gap-5 md:order-2 pr-10'>
        <Button
          borderRadius='1.75rem'
          className='bg-tansparent text-black dark:text-white border-neutral-200 dark:border-slate-800 w-full md:mr-10'
          onClick={() => dispatch(toggleTheme())}
        >
          {theme === "light" ? (
            <FaSun className='w-5 h-5' />
          ) : (
            <FaMoon className='w-5 h-5' />
          )}
        </Button>
        <Button
          borderRadius='1.75rem'
          className='bg-transparent border-slate-800 mr-4 text-sm font-semibold text-black dark:text-white'
          onClick={() => navigate("/sign-in")}
        >
          Sign In
        </Button>

        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink active={path === "/"} as={"div"}>
          <Link to='/'>Home</Link>
        </NavbarLink>

        <NavbarLink active={path === "/service"} as={"div"}>
          <Link to='/service'>Service</Link>
        </NavbarLink>

        <NavbarLink active={path === "/about"} as={"div"}>
          <Link to='/about'>About Us</Link>
        </NavbarLink>

        <NavbarLink active={path === "/contact"} as={"div"}>
          <Link to='/contact'>Contact Us</Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
