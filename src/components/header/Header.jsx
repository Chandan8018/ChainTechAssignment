import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/theme/themeSlice";
import { Button } from "../ui/moving-border";

function Header() {
  const path = useLocation().pathname;
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state.theme);
  return (
    <Navbar fluid rounded>
      <NavbarBrand href='https://flowbite-react.com'>
        <img
          src='https://media0.giphy.com/media/Dwv8Wl7vI1JUuOektL/giphy.gif?cid=6c09b952x6hnij1dfkt64jbuf8zpx3v426vavnvf92t0cfs1&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g'
          className='mr-3 h-6 sm:h-9'
          alt='ChainTech™ App Logo'
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          ChainTech™
        </span>
      </NavbarBrand>
      <div className='flex gap-5 md:order-2'>
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
        >
          Sign In
        </Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink active={path === "/"} as={"div"}>
          <Link to='/'>Home</Link>
        </NavbarLink>

        <NavbarLink active={path === "/createtodo"} as={"div"}>
          <Link to='/createtodo'>Create Todo</Link>
        </NavbarLink>

        <NavbarLink active={path === "/viewtodo"} as={"div"}>
          <Link to='/viewtodo'>View Todo</Link>
        </NavbarLink>

        <NavbarLink active={path === "/edit-deltodo"} as={"div"}>
          <Link to='/edit-deltodo'>Edit & Del Todo</Link>
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Header;
