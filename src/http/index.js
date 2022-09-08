import axios from "axios";

const $host = axios.create({
    baseURL: "http://localhost:7000"
})

const $authHost = axios.create({
    withCredentials: true,
    origin,
    baseURL: "http://localhost:7000"
})


const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}
