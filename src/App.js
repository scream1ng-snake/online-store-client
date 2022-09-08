import React, {useContext, useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import AppRouter from './components/AppRouter';
import NavBar from './components/NavBar/NavBar';
import { observer } from 'mobx-react-lite';
import Preloader from './components/preloader/preloader';
import {Context} from "./index";
import {refresh} from "./http/userAPI";
import { getCart } from './http/cartAPI';

const App = observer(() => {
  const { user } = useContext(Context)
  const { cart } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    refresh()
    .then(data => {
      user.setUser(data)
      user.setIsAuth(true)
    })
    .then(async () => {
      const cartData = await getCart(user.id);
      cart.setCart(cartData);
    })
    .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <Preloader  />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
})

export default App;
