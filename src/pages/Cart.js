import React, { useContext, useEffect } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { updateCart } from '../http/cartAPI';

const Cart = observer(() => {
  const { cart } = useContext(Context)
  const { user } = useContext(Context)


  useEffect(() => {
    updateCart(user.id, cart.cart);
  }, [cart.devices.length])


  return (
    <section class="cart-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="cart-table">
              <h3>Ваша корзина</h3>
              <div class="cart-table-warp">
                <table>
                  <thead>
                    <tr>
                      <th class="product-th">Товар</th>
                      <th class="total-th">Цена</th>
                      <th class="total-th"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {!cart.devices || cart.devices.length === 0 ?
                      <tr>
                        <td><h4>Корзина пуста</h4></td>
                      </tr>
                    :
                      cart.devices.map((d) =>
                        <tr>
                          <td class="product-col">
                            <div class="pc-title">
                              <h4>{d.name}</h4>
                              <p>${d.price}</p>
                            </div>
                          </td>
                          <td class="total-col"><h4>${d.price}</h4></td>
                          <td class="total-col" onClick={() => cart.removeDevice(d)}><h4>Удалить</h4></td>
                        </tr>
                      )

                    }
                  </tbody>
                </table>
              </div>
              <div class="total-cost">
                <h6>Total <span>$99.90</span></h6>
              </div>
            </div>
          </div>
          <div class="col-lg-4 card-right">
            <form class="promo-code-form">
              <input type="text" placeholder="Enter promo code" />
              <button>Submit</button>
            </form>
            <a href="" class="site-btn">Proceed to checkout</a>
            <a href="" class="site-btn sb-dark">Continue shopping</a>
          </div>
        </div>
      </div>
    </section>
  )
})

export default Cart