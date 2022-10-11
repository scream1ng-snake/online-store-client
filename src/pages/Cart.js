import React, { useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { updateCart } from '../http/cartAPI';
import { Row, Col, Container } from "react-bootstrap"

const Cart = observer(() => {
  const { cart } = useContext(Context)
  const { user } = useContext(Context)


  useEffect(() => {
    updateCart(user.id, cart.cart);
  }, [cart.devices.length])


  return (
    <Container>
      <Col lg={8}>
        <Row>
          <div className='cart'>
            <div className='cart-title'>
              <p>Ваша корзина</p>
            </div>
            <div className='cart-list'>
              {!cart.devices || cart.devices.length === 0 ?
                <div className='cart-empty'>
                  <p>Пустая корзина</p>
                </div>
                :
                cart.devices.map((d, index) =>
                  <div className={`cart-item ${index % 2 === 0 && "dark"}`}>
                    <div className='item-body'>
                      <div className='item-title'>
                        {d.name}
                      </div>
                      <div className='item-price'>
                        ${d.price}
                      </div>
                    </div>
                    <div className='delete-item' onClick={() => cart.removeDevice(d)}>
                      <span className='small-btn'>Удалить &gt;</span>
                    </div>
                  </div>
                )
              }
            </div>
            <div className='cart-footer'></div>
          </div>
        </Row>
      </Col>
      <Col lg={4}>
        <Row>
        </Row>
      </Col>
    </Container>
  )
})

export default Cart