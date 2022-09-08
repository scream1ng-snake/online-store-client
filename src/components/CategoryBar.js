import React, { useContext } from 'react';
import { Context } from "../index";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from 'react-router-dom';
import { observer } from 'mobx-react-lite';


const CategoryBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <div className="filter-widget">
      <h2 className="fw-title">Categories</h2>
      <ul className="category-menu">
        {!device.types || device.types.length === 0 ?
            <div>Нет категорий</div>
          :
            device.types.map(type =>
              <li
                className={type.id === device.selectedType.id && "active"}
                onClick={() => device.setSelectedType(type)}
                key={type.id}
              >
                <NavLink to={"#"}>{type.name}</NavLink>
              </li>
            )
          }
      </ul>
    </div>
  )
})
export default CategoryBar;
