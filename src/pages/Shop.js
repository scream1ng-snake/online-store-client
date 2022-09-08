import React, { useContext, useEffect } from 'react';
import DeviceList from '../components/DeviceList'
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";
import Pages from "../components/Pages";
import CategoryBar from '../components/CategoryBar';
import BrandBar from '../components/BrandBar';

const Shop = observer(() => {
  const { device } = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data.rows))
    fetchBrands().then(data => device.setBrands(data.rows))
    fetchDevices(null, null, device.page, device.limit).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [])

  useEffect(() => {
    fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, device.limit).then(data => {
      device.setDevices(data.rows)
      device.setTotalCount(data.count)
    })
  }, [device.page, device.selectedType, device.selectedBrand,])

  return (
    <section class="category-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 order-2 order-lg-1">
            <CategoryBar />
            <BrandBar />
          </div>
          <div class="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
            <DeviceList />
            <Pages />
          </div>
        </div>
      </div>
    </section>
  )
})

export default Shop;