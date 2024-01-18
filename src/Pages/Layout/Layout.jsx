import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import logo from '../../assets/Logo.jpg'; // Путь к вашему логотипу
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <Navbar bg="light" expand="lg" className={css.navbar}>
        <NavLink to="/" className="navbar-brand">
          <img src={logo} alt="Logo" width="50" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <NavLink
                to="/"
                className={`nav-link ${css['item']}`}
                activeClassName={css.active}
              >
                Home
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink
                to="/movies"
                className={`nav-link ${css['item']}`}
                activeClassName={css.active}
              >
                Movies
              </NavLink>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
