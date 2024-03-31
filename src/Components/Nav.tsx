import { NavLink } from "react-router-dom";
import "../index.css";
import { Link, useResolvedPath, useMatch } from "react-router-dom";
function Nav() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand me-auto" to="#">
          Logo
        </Link>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Logo
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <CustomLink to={"/"}>Home</CustomLink>
              <CustomLink to={"/About"}>About</CustomLink>
              <CustomLink to={"/Projects"}>Projects</CustomLink>
              <CustomLink to={"/Services"}>Services</CustomLink>
              <CustomLink to={"/Contacts"}>Contacts</CustomLink>
            </ul>
          </div>
        </div>
        {/* <a href="#" className={"login_button"}>
          Login
        </a> */}
        <button
          className="navbar-toggler pe-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }: any) {
  // const resolvedPath = useResolvedPath(to);
  // const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li>
      <NavLink className={"nav-link mx-lg-2"} to={to} {...props}>
        {children}
      </NavLink>
    </li>
  );
}

export default Nav;
