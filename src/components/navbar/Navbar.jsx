import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
    return (
        <div className="container">
            <h1>LOGO</h1>
            <div>
               <Links/>
            </div>
        </div>
    )
};

export default Navbar;