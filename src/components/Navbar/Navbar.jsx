import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-warning sticky-top">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Brand Logo
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
