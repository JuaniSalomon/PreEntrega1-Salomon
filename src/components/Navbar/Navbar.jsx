import { Link } from "react-router-dom";
import CartWidget from "../Cart/CartWidget/CartWidget";
import Cart from "../Cart/Cart";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-warning sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            J Beers
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item me-5">
                <Link className="nav-link active" to="/schneider">
                  Schneider
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link active" to="/stella">
                  Stella Artois
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link className="nav-link active" to="/quilmes">
                  Quilmes
                </Link>
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
