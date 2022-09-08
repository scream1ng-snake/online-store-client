import {$authHost, $host} from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('types', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('types')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('brands', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('brands')
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('devices', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit) => {
    const {data} = await $host.get('devices', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get("devices/" + id) 
    return data
}
