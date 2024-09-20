import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget/CartWidget";
import Cart from "../Cart/Cart";
import "./Navbar.css";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand custom-brand" to="/">
            J Beers
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item me-5">
                <Link className="nav-link active" to="/">
                  Inicio
                </Link>
              </li>

              {/* Dropdown de Productos */}
              <li className="nav-item dropdown me-5">
                <a
                  className="nav-link dropdown-toggle active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </a>
                <ul
                  className="dropdown-menu bg-warning"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/schneider">
                      Schneider
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/stella">
                      Stella Artois
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/quilmes">
                      Quilmes
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>

      {/* OFFCANVAS INIT */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="cartOffcanvas"
        aria-labelledby="cartOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="cartOffcanvasLabel">
            Carrito
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <Cart />
        </div>
      </div>
      {/* OFFCANVAS END */}
    </>
  );
};

export default NavBar;
