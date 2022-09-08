import React, {useContext} from 'react';
import {Context} from "../../index";
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import { ADMIN_ROUTE, BLOG_ROUTE, BRAND_ROUTE, CART_ROUTE, CATEGORY_ROUTE, CHECKOUT_ROUTE, CONTACT_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../../helpers/consts';

function NavBar() {
  const routes = [
    {
      title: "Товары",
      path: SHOP_ROUTE
    },
    {
      title: "Категории",
      path: CATEGORY_ROUTE
    },
    {
      title: "Корзина",
      path: CART_ROUTE
    },
    {
      title: "Оформление заказа",
      path: CHECKOUT_ROUTE
    },
    {
      title: "Контакты",
      path: CONTACT_ROUTE
    }
  ]


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
    <header className="header-section">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 text-center text-lg-left">
            </div>
            <div className="col-xl-6 col-lg-5">
              <form className="header-search-form">
                <input type="text" placeholder="Поиск по товарам ...." />
                <button><i className="flaticon-search"></i></button>
              </form>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="user-panel">
                <div className="up-item">
                  <i className="flaticon-profile"></i>
                  {!user.isAuth ?
                    <>
                      <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                      или
                      <NavLink to={REGISTRATION_ROUTE}>Создать аккаунт</NavLink>
                    </>
                    :
                    <NavLink to={MAIN_ROUTE} onClick={() => logOut()}>Выйти</NavLink>}
                </div>
                <div className="up-item">
                  <div className="shopping-card">
                    <i className="flaticon-bag"></i>
                    <span>0</span>
                  </div>
                  <NavLink to={CART_ROUTE}>Корзина</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <nav className="main-navbar">
        <div className="container">
          <ul className="main-menu">
            <li><NavLink to={MAIN_ROUTE}>Главная</NavLink></li>
            <li><NavLink to={SHOP_ROUTE}>Магазин</NavLink></li>
            <li><NavLink to={MAIN_ROUTE}>Разделы</NavLink>
              <ul className="sub-menu">

                {routes.map(r =>
                  <li key={r.path}><NavLink to={r.path}>{r.title}</NavLink></li>
                )}

              </ul>
            </li>
            <li><NavLink to={BLOG_ROUTE}>Блог
              <span className="new">New</span>
            </NavLink></li>
            {user.roles?.includes("ADMIN") && <li><NavLink to={ADMIN_ROUTE}>Админ панель</NavLink></li>}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;