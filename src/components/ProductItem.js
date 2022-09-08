import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import { DEVICE_ROUTE } from "./../helpers/consts";



const ProductItem = ({ device }) => {
  const { cart } = useContext(Context)
  const navigate = useNavigate();
  return (
    <div className="col-lg-4 col-sm-6" onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
      <div className="product-item">
        <div className="pi-pic">
          <div className="filters__img">
            <img src={process.env.REACT_APP_API_URL + device.image} alt="" />
          </div>
          <div className="pi-links">
            <a 
              
              className="add-card"
              onClick={(e) => {
                e.stopPropagation();
                cart.addDevice(device)
              }}
            >
              <i className="flaticon-bag"></i><span>ADD TO CART</span>
            </a>
          </div>
        </div>
        <div className="pi-text">
          <h6>${device.price}</h6>
          <p>{device.name} </p>
        </div>
      </div>
    </div>
  )
}


export default ProductItem;