import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <div>
            <div className="h-16"><Nav/></div>
            <div><Outlet/></div>
            <div><Footer/></div>
        </div>
    );
};

export default Layout;