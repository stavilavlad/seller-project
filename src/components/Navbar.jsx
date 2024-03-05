import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { FaBarsStaggered } from "react-icons/fa6";
import { PiSun, PiMoon } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../features/user/userSlice";

const themes = {
  light: "emerald",
  dark: "dim",
};

const getLocalTheme = () => {
  const localTheme = localStorage.getItem("theme") || "emerald";
  return localTheme;
};

const Navbar = () => {
  const [theme, setTheme] = useState(getLocalTheme);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.userState.user);

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
            <img src="/seller-high-resolution-logo-black-transparent (1).png" alt="logo" style={{ width: "185px" }}></img>
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
                  <Link to={"/login"} className="btn btn-sm btn-primary sm:hidden w-full ">
                    Login
                  </Link>
                  <Link to={"/register"} className="btn btn-sm btn-primary sm:hidden w-full my-1">
                    Register
                  </Link>
                  <Link to={"/listing"} className="btn md:hidden w-full btn-primary btn-sm">
                    <FiPlus className="h-4 w-4" />
                    Create Listing
                  </Link>
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
          <Link to="/listing" className="flex flex-nowrap">
            <button className="hidden md:btn sm:btn-sm sm:h-10 mr-3">
              <FiPlus className="h-4 w-4" />
              Create Listing
            </button>
          </Link>

          <Link to={"/listing"} className="btn btn-square btn-sm md:hidden btn-accent">
            <FiPlus className="h-4 w-4" />
          </Link>
          {/* THEME TOGGLE */}
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" defaultChecked={theme == themes.light ? false : true} value="synthwave" onClick={handleTheme} />
            <PiSun className="swap-on h-7 w-7" />
            <PiMoon className="swap-off h-7 w-7" />
          </label>
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost capitalize text-lg">
                  {user?.username?.substring(0, 1)}
                </div>
                <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52 mt-4">
                  <li className="text-base-content px-4 font-semibold text-lg">{user?.username}</li>
                  <li className="text-base-content  ">
                    <Link to={"/user/profile"} className="rounded-b-none">
                      Profile
                    </Link>
                  </li>
                  <li className="text-base-content">
                    <Link to="/listing" className="btn md:hidden w-full btn-primary btn-sm">
                      <FiPlus className="h-4 w-4" />
                      Create Listing
                    </Link>
                  </li>

                  <li className="text-base-content border border-t-2 border-t-base-300 font-semibold">
                    <button
                      className=" rounded-t-none"
                      type="button"
                      onClick={() => {
                        dispatch(logoutUser());
                      }}
                    >
                      Log out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className="hidden sm:flex gap-4">
                <Link to={"/login"} className="btn btn-sm  rounded-box">
                  Login
                </Link>
                <Link to={"/register"} className="btn btn-sm btn-primary glass rounded-box">
                  Register
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
