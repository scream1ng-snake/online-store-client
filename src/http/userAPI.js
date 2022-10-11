import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password, username) => {
    const {data} = await $host.post('auth/registration', {username, email, password})
    return jwt_decode(data.accessToken)
}

export const login = async (email, password) => {
    const {data} = await $host.post('auth/login', {email, password})
    return jwt_decode(data.accessToken)
}

export const refresh = async () => {
    const {data} = await $authHost.get('auth/refresh')
    return jwt_decode(data.accessToken)
}

export const logout = async () => {
    return await $authHost.get('auth/logout')
}
