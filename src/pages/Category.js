import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BrandBar from '../components/BrandBar'
import CategoryBar from '../components/CategoryBar'
import DeviceList from '../components/DeviceList'

export default function CategoryPage() {
  return (
    <Container>
      <Row>
        <Col lg={3}>
          <CategoryBar />
        </Col>
        <Col lg={9}>
          <Row>
            <BrandBar />
          </Row>
          <Row>
            <DeviceList />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}