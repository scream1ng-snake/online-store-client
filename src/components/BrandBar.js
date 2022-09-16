import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { NavLink } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const BrandBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <ListGroup horizontal>
      {!device.brands || device.brands.length === 0 ?
        <div>Нет брендов</div>
        :
        device.brands.map(brands =>
          <ListGroupItem
            className={brands.id === device.selectedBrand.id && "active"}
            onClick={() => device.setSelectedBrand(brands)}
            key={brands.id}
          >
            {brands.name}
          </ListGroupItem>
        )
      }
    </ListGroup>
  )
})

export default BrandBar;