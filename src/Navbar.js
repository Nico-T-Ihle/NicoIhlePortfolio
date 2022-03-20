import { Link } from 'react-router-dom';
import './CSS/Navbar/Navbar.css'

function Navbar() 
{

return (
    <header className="header">
        <a href="" > <Link className="logo" to="/NicoIhleCode">Portfolio</Link></a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" for="menu-btn">
            <span className="navicon"></span>
        </label>
            <ul className="menu">
                <li><a target="_blank" href="https://www.linkedin.com/in/nico-ihle">.Linkedin()</a></li>
                 <li><a target="_blank" href="https://www.instagram.com/nico.yuy/">.Instagram()</a></li>
                <li><a target="_blank"  href="https://github.com/Nico-T-Ihle">.Github[]</a></li>
                <li><a target="_blank" href="#">Login</a></li>
            </ul>
    </header>

  );
}

export default Navbar;
