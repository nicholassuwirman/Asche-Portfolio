import './Navbar.css'
import logo from '../../assets/navbar/logo.png'
import github from '../../assets/navbar/github-logo.svg'
import instagram from '../../assets/navbar/instagram-logo.svg'
import linkedin from '../../assets/navbar/linkedin-logo.svg'

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
      </div>

      <div className="navbar-menu">
        <a href="#about" className="navbar-link">ABOUT</a>
        <a href="#work" className="navbar-link">WORK</a>
        <a href="#contact" className="navbar-link">CONTACT</a>
      </div>

        <div className="navbar-socials">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" className="social-icon" />
          </a>  
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" className="social-icon" />
          </a>
          
        </div>
    </nav>
  )
}
