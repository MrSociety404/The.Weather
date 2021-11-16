import { IoIosSunny, IoLogoGithub } from 'react-icons/io'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="header">
      <Link to="/" className="header__box">
        <IoIosSunny aria-label="Logo" className="header__logo" />
        <h1 className="header__title">The.Weather</h1>
      </Link>
      <a href="https://github.com/MrSociety404" className="header__link">
        <IoLogoGithub aria-label="github" className="header__github" />
      </a>
    </header>
  )
}

export default NavBar