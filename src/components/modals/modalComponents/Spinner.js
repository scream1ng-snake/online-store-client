import React from 'react'
import { Row, Spinner } from "react-bootstrap"

export default function ModalSpinner() {
  return (
    <Row className="justify-content-md-center mt-3">
      <Spinner animation="border" />
    </Row>
  )
}
