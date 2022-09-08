import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const registration = async (email, password, username) => {
    const {data} = await $host.post('auth/registration', {username, email, password})
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)
    return jwt_decode(data.refreshToken)
}

export const login = async (email, password) => {
    const {data} = await $host.post('auth/login', {email, password})
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)
    return jwt_decode(data.refreshToken)
}

export const refresh = async () => {
    const {data} = await $authHost.post('auth/refresh' , {refreshToken: `Bearer ${localStorage.getItem('refreshToken')}`})
    localStorage.setItem('accessToken', data.accessToken)
    localStorage.setItem('refreshToken', data.refreshToken)
    return jwt_decode(data.accessToken)
}
