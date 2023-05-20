import PropTypes from "prop-types";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

function Header({ user }) {
  const login = user ? (
    <span>Bienvenue {user} !</span>
  ) : (
    <span>Connectez-vous !</span>
  );
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Bootstrap"
              width="30"
              height="24"
              className="mr-2"
            />
            Cours REACT
          </Link>
          <div className="navbar-brand">{login}</div>
        {/* Toggle button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        {/* Liens */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Users
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/counter">
                  Compteur
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/loggin">
                  Connexion
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/roles">
                  Rôles
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}

// Typage des props
Header.propTypes = {
  user: PropTypes.string,
};

export default Header;
