import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { NavLink } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


const BrandBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <div className="brand-bar">
      <div className="brand-title">Бренды</div>
      <div className='brand-list'>
        {!device.brands || device.brands.length === 0 ?
          <div className='brand-item'>
            <span>Нет брендов</span>
          </div>
          :
          device.brands.map(brands =>
            <div className={`brand-item ${brands.id === device.selectedBrand.id && "active"}`}
              onClick={() => device.setSelectedBrand(brands)}
              key={brands.id}>
              <span>{brands.name} &gt;</span>
            </div>
          )
        }
      </div>
    </div>
  )
})

export default BrandBar;