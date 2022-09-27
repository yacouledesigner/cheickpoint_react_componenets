import "./navbar.css"
import logo from "../logo.svg";
import burger from "../burger.svg";

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <div>
                    <img src={logo} alt="logo-react" />
                </div>
                <span>React</span>
            </div>
            <div>
                <ul>
                    <li><a href="#">Docs</a></li>
                    <li><a href="#">Tutorials</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
            </div>
            <div>
                <input type="text" placeholder="search..."/>
                <ul>
                    <li><a href="#">v18.2.0</a></li>
                    <li><a href="#">Languages</a></li>
                    <li><a href="#">GitHub</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
