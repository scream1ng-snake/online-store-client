import React, { useContext, useEffect } from 'react';
import DeviceList from '../components/DeviceList'
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchBrands, fetchDevices, fetchTypes } from "../http/deviceAPI";
import Pages from "../components/Pages";
import CategoryBar from '../components/CategoryBar';
import BrandBar from '../components/BrandBar';
import { Col, Container, Row } from 'react-bootstrap';

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
    <div className="shop">
      <Container>
        <Row>
          <Col lg={3}>
            <Row>
              <CategoryBar />
            </Row>
          </Col>
          <Col lg={9}>
            <Row>
              <BrandBar />
            </Row>
            <Row>
              <DeviceList />
              <Pages />
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
})

export default Shop;