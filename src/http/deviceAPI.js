import { $authHost, $host } from "./index";

// Brands

export const createBrand = async (brand) => {
    const { data } = await $authHost.post('brands', brand)
    return data
}

export const fetchBrands = async () => {
    const { data } = await $host.get('brands')
    return data
}

export const updateBrand = async (id, type) => {
    const { data } = await $host.put('brands/' + id, type)
    return data
}

export const searchBrand = async (name) => {
    const { data } = await $host.get('brands/search', { params: { name } })
    return data
}

export const deleteBrand = async (id) => {
    const { data } = await $host.delete('brands/' + id)
    return data
}

// Devices

export const createDevice = async (device) => {
    const { data } = await $authHost.post('devices', device)
    return data
}

export const fetchDevices = async (typeId, brandId, page, limit) => {
    const { data } = await $host.get('devices', {
        params: {
            typeId, brandId, page, limit
        }
    })
    return data
}

export const fetchOneDevice = async (id) => {
    const { data } = await $host.get("devices/" + id)
    return data
}

// Types

export const createType = async (type) => {
    const { data } = await $authHost.post('types', type)
    return data
}

export const fetchTypes = async () => {
    const { data } = await $host.get('types')
    return data
}

export const updateType = async (id, type) => {
    const { data } = await $host.put('types/' + id, type)
    return data
}

export const searchType = async (name) => {
    const { data } = await $host.get('types/search', { params: { name } })
    return data
}

export const deleteType = async (id) => {
    const { data } = await $host.delete('types/' + id)
    return data
}
