import React, { useContext } from 'react';
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { NavLink } from 'react-router-dom';


const BrandBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <div class="filter-widget">
      <h2 class="fw-title">Brand</h2>
      <ul class="category-menu">
        {!device.brands || device.brands.length === 0 ?
          <div>Нет брендов</div>
        :
          device.brands.map(brands =>
            <li
              className={brands.id === device.selectedBrand.id && "active"}
              onClick={() => device.setSelectedBrand(brands)}
              key={brands.id}
            >
              <NavLink to={"#"}>{brands.name}</NavLink>
            </li>
          )
        }
      </ul>
    </div>
  )
})

export default BrandBar;