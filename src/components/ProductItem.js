import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import { DEVICE_ROUTE } from "./../helpers/consts";



const ProductItem = ({ device }) => {
  const { cart } = useContext(Context)
  const navigate = useNavigate();
  return (
    <Col
      lg={4}
      sm={6}
      onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}
    >
      <Card>
        <Card.Img 
          variant="top" 
          src={process.env.REACT_APP_API_URL + device.image}
          style={{ height: '130px' }}
        />
        <Card.Body>
          <Card.Title>{device.name}</Card.Title>
          <Card.Text>
            ${device.price}
          </Card.Text>
          <Button
            variant="dark"
            onClick={(e) => {
              e.stopPropagation();
              cart.addDevice(device)
            }}
          >
            Добавить в корзину
          </Button>
        </Card.Body>
      </Card>
    </Col>
  )
}


export default ProductItem;