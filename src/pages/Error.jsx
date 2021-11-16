import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom'

const Error = () => {
  document.querySelector("body").classList.add("error-page");

  return (
    <>
    <NavBar />
    <main className="error">
      <h2 className="error__title">
        Error
        <span className="error__span">404</span>
      </h2>
      <div className="error__box">
      <p className="error__desc">What are you doing here ?</p>
      <Link to="/" className="error__link">FIND YOUR WAY</Link>
      </div>
    </main>
    </>
  );
};

export default Error;
