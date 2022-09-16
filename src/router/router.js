import { ADMIN_ROUTE, CART_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, MAIN_ROUTE, CHECKOUT_ROUTE, CATEGORY_ROUTE, CONTACT_ROUTE, BLOG_ROUTE, BRAND_ROUTE, SHOP_ROUTE } from "../helpers/consts.js";
import Admin from "../pages/Admin.js";
import Cart from "../pages/Cart.js";
import Checkout from "../pages/Checkout";
import Main from "../pages/Main/Main";
import Auth from "../pages/Auth";
import Device from "../pages/Device";
import Category from "../pages/Category";
import Contacts from "../pages/Contacts";
import Blog from "../pages/Blog";
import Brands from "../pages/Brands";
import Shop from "../pages/Shop.js";


export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin />
  },
  {
    path: CART_ROUTE,
    Component: <Cart />
  },
  {
    path: CHECKOUT_ROUTE,
    Component: <Checkout />
  },
]

export const publicRoutes = [
  {
    path: MAIN_ROUTE,
    Component: <Main />
  },
  {
    path: LOGIN_ROUTE,
    Component: <Auth />
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth />
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: <Device />
  },
  {
    path: CATEGORY_ROUTE,
    Component: <Category />
  },
  {
    path: CONTACT_ROUTE,
    Component: <Contacts />
  },
  {
    path: BLOG_ROUTE,
    Component: <Blog />
  },
  {
    path: BRAND_ROUTE,
    Component: <Brands />
  },
  {
    path: SHOP_ROUTE,
    Component: <Shop />
  }
]
