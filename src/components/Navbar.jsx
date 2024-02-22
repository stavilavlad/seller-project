import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaBarsStaggered } from "react-icons/fa6";
import { PiSun, PiMoon } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";

const themes = {
  light: "emerald",
  dark: "dim",
};

const getLocalTheme = () => {
  const localTheme = localStorage.getItem("theme") || "emerald";
  // const newTheme = theme == themes.light ? themes.dark : themes.light;
  return localTheme;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getLocalTheme);

  const user = "u";

  function handleTheme() {
    setTheme(theme == themes.light ? themes.dark : themes.light);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-primary sticky top-0 z-10">
      <div className="align-element navbar text-secondary-content">
        <div className=" navbar-start">
          <Link to="/" className="">
            <img src="src\assets\seller-high-resolution-logo-black-transparent (1).png" style={{ width: "185px" }}></img>
          </Link>
          {/* DROPDOWN LIST */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content  mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 text-base-content items-start ">
              <NavLinks />
              {user ? (
                <>
                  <Link to="/listing" className="btn md:hidden w-full btn-primary btn-sm">
                    <FiPlus className="h-4 w-4" />
                    Create Listing
                  </Link>
                </>
              ) : (
                <div className="border-t-2 border-base-300 mt-2 pt-2 flex flex-col w-full">
                  <button className="btn btn-sm btn-primary sm:hidden w-full ">Login</button>
                  <button className="btn btn-sm btn-primary sm:hidden w-full my-1">Register</button>
                  <button className="btn md:hidden w-full btn-primary btn-sm">
                    <FiPlus className="h-4 w-4" />
                    Create Listing
                  </button>
                </div>
              )}
            </ul>
          </div>
        </div>

        <div className=" navbar-center hidden lg:flex  ">
          <ul className="flex font-semibold text-primary-content menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end flex gap-3 text-xl">
          <Link to="/listing">
            <button className="hidden md:btn sm:btn-sm sm:h-10 mr-3">
              <FiPlus className="h-4 w-4" />
              Create Listing
            </button>
          </Link>

          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" defaultChecked={theme == themes.light ? false : true} value="synthwave" onClick={handleTheme} />
            <PiSun className="swap-on h-7 w-7" />
            <PiMoon className="swap-off h-7 w-7" />
          </label>
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost capitalize text-lg">
                  {user}
                </div>
                <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52 mt-4">
                  <li className="text-base-content">
                    <a>Item 1</a>
                  </li>
                  <li className="text-base-content">
                    <a>Item 1</a>
                  </li>
                  <li className="text-base-content">
                    <Link to="/listing" className="btn md:hidden w-full btn-primary btn-sm">
                      <FiPlus className="h-4 w-4" />
                      Create Listing
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="hidden sm:flex gap-4">
                <button className="btn btn-sm  rounded-box">Login</button>
                <button className="btn btn-sm btn-primary glass rounded-box">Register</button>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;