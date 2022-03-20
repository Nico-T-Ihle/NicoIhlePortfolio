import { Link } from 'react-router-dom';
import '../../src/CSS/footer.css'

function Footer() 
{

return (
    <footer class="footer-distributed">
        <div class="footer-right">
        <a target="_blank" href="https://www.instagram.com/nico.yuy/"></a>
        <a target="_blank" href="https://github.com/Nico-T-Ihle"></a>
        <a target="_blank" href="https://www.linkedin.com/in/nico-ihle"> </a>
        </div>
        <div class="footer-left">
        <p class="footer-links">
            <a class="link-1" href="#">Home</a>
            <a href="https://www.flaticon.com" target={"_blank"}>Attribute Icons</a>
            <a href="#">Impressum</a>
            <a href="#">Contact</a>
        </p>
        <p>Nico Ihle &copy; 2020</p>
        </div>
    </footer>
  );
}

export default Footer;