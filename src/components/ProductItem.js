import React, { useContext } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import { DEVICE_ROUTE } from "./../helpers/consts";

const Product = ({ device }) => {
  const { cart } = useContext(Context)
  const navigate = useNavigate();
  return (
    <Col
      lg={4}
      sm={6}
      onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}
    >
      <div className="card-block">
        <div className="card-image">
          <img 
            src={process.env.REACT_APP_API_URL + device.image}
          />
        </div>
        <div className="card-title">
          <p>{device.name}</p>
        </div>
        <div className="card-description">
          <span>${device.price}</span>
        </div>
        <div className="card-button">
          <Button
            variant="dark"
            onClick={(e) => {
              e.stopPropagation();
              cart.addDevice(device)
            }}
          >
            Добавить в корзину
          </Button>
        </div>
      </div>
    </Col>
  )
}


export default Product;