import React, { useContext } from 'react';
import { Context } from "../../index";
import { LinkContainer } from 'react-router-bootstrap';
import { ADMIN_ROUTE, CART_ROUTE, dropdownNav, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../helpers/consts';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Link from '../Link';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const { user } = useContext(Context)
  const { cart } = useContext(Context)
  const navigate = useNavigate()


  const logOut = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    cart.removeCart()
    user.setUser({})
    user.setIsAuth(false)
  }

  return (
    <Navbar bg='dark' variant='dark' expand="md">
      <Container>
        <Navbar.Brand>ЗВУЧИТ И ТОЧКА</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link path={MAIN_ROUTE}>Главная</Link>
            <Link path={SHOP_ROUTE}>Магазин</Link>
            <NavDropdown title="Разделы" id="basic-nav-dropdown">
              {dropdownNav.map(r =>
                <LinkContainer to={r.path}><NavDropdown.Item key={r.path}>{r.title}</NavDropdown.Item></LinkContainer>
              )}
            </NavDropdown>
            {!user.isAuth ?
              <>
                <Link path={LOGIN_ROUTE}>Войти</Link>
                <Link path={REGISTRATION_ROUTE}>Создать аккаунт</Link>
              </>
              :
              <LinkContainer to={MAIN_ROUTE}><Nav.Link onClick={() => logOut()}>Выйти</Nav.Link></LinkContainer>}
            {user.roles?.includes("ADMIN") && <Link path={ADMIN_ROUTE}>Админ панель</Link>}
            <Link path={CART_ROUTE}>Корзина</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;
