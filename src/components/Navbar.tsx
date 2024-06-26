import { Link } from "react-router-dom";
// import CustomizedSwitches from "./Toggler";
import AdminSwitch from "./AdminSwitch";
import { memo } from "react";

const Navbar = () => {
  return (
    <div
      id="navbar"
      className="fixed  top-0 z-50 bg-black w-full bg-opacity-50  h-[86px]"
    >
      <nav className="flex justify-between items-center h-full ">
        <img
          src="volunteer-logo.png"
          alt="image-logo"
          className="h-[30px] ml-5"
        />
        <ul className="flex justify-center items-center  text-xl text-white ">
          <li className="mx-12">
            <Link to={`/`}>Početna</Link>
          </li>
          <li className="mx-12">
            <Link to={`aktivnosti`}>Aktivnosti</Link>
          </li>
          <li className="mx-12">
            <Link to={`volonteri`}>Volonteri</Link>
          </li>
          <li className="mx-12">
            <Link to={`udruge`}>Udruge</Link>
          </li>

          {/* <li className="ml-11">
            <CustomizedSwitches />
          </li> */}
        </ul>
        <AdminSwitch />{" "}
      </nav>
    </div>
  );
};

const NavbarMemo = memo(Navbar);
export default NavbarMemo;
