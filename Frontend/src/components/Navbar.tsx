import { Link } from "react-router-dom";

const Navbar = () => {
    return <>
        <nav className="navBar">
            <ul>
                <li>
                    <Link className="navLink" to={'/'}>Users</Link>
                </li>
                <li>
                    <Link className="navLink" to={'/form'}>Add User</Link>
                </li>
            </ul>
        </nav>
    </>
}

export default Navbar;