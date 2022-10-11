import React, { useContext, useState } from 'react';
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { login, registration } from "../http/userAPI";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE } from '../helpers/consts';
import { getCart } from '../http/cartAPI';

const Auth = observer(() => {
  const { user } = useContext(Context)
  const { cart } = useContext(Context)

  const location = useLocation()
  const navigate = useNavigate()

  const isLogin = location.pathname === LOGIN_ROUTE

  const [email, setEmail] = useState('saidlykasov@gmail.com')
  const [password, setPassword] = useState('12345678')
  const [username, setUsername] = useState('')

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password, username);
      }
      
      user.setUser(data)
      user.setIsAuth(true)
      const cartData = await getCart(user.id);
      cart.setCart(cartData);
      
      navigate(MAIN_ROUTE)
    } catch (e) {
      alert(e.response.data?.message)
    }

  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          {!isLogin &&
            <Form.Control
              className="mt-3"
              placeholder="Введите ваш никнейм..."
              value={username}
              onChange={e => setUsername(e.target.value)}
            />}
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
            {isLogin ?
              <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
              :
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
            }
            <Button
              className="mt-3"
              variant={"outline-dark"}
              onClick={click}
            >
              {isLogin ? 'Войти' : 'Регистрация'}
            </Button>
          </Row>

        </Form>
      </Card>
    </Container>
  );
});

export default Auth;
