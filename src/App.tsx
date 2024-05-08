import { memo } from "react";
import "./App.css";
// import Footer from "./components/Footer";
import NavbarMemo from "./components/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <NavbarMemo />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </>
  );
}

const AppMemo = memo(App)
export default AppMemo;
