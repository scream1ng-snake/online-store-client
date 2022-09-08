import {$authHost, $host} from "./index";

export const getCart = async (id) => {
    const {data} = await $authHost.get('carts/' + id)
    return data
}

export const updateCart = async (id, cart) => {
    const {data} = await $authHost.post('carts/' + id, cart)
    return data
}
