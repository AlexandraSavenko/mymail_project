import { NavLink } from "react-router-dom";

const NavBar = () => {
return <div>
    <ul>
        <li>
            <NavLink to={"/"}>home</NavLink>
        </li>
        <li>
            <NavLink to={"/products"}>Products</NavLink>
        </li>
        <li>
            <NavLink to={"/users"}>Users</NavLink>
        </li>
        <li>
            <NavLink to={"/lottiebtn"}>LottieButton</NavLink>
        </li>
    </ul>
</div>
}

export default NavBar;