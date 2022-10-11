import { makeAutoObservable } from "mobx";

export default class CartStore {
  constructor() {
    this._cart = {
      id: null,
      userId: null,
      devices: []
    }
    makeAutoObservable(this)
  }

  removeCart() {
    this._cart.id = null;
    this._cart.userId = null;
    this._cart.devices = [];
  }

  setCart(cart) {
    this._cart = cart
  }

  addDevice(d) {
    if (!this._cart.devices.includes(d)) this._cart.devices.push(d);
  }

  removeDevice(d) {
    const i = this._cart.devices.indexOf(d);
    if (i >= 0) {
      this._cart.devices.splice(i, 1);
    }
  }

  get devices() {
    return this._cart.devices
  }
  get userId() {
    return this._cart.userId
  }

  get id() {
    return this._cart.id
  }

  get cart() {
    return this._cart
  }
}
