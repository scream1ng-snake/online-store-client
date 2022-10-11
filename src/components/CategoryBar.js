import React, { useContext } from 'react';
import { Context } from "../index";
import { observer } from 'mobx-react-lite';

const CategoryBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <div className='category-bar'>
      <div className="category-title">Категории</div>
      <div className="category-list">
        {!device.types || device.types.length === 0 ?
          <div className='category-item'>
            <span>Нет категорий</span>
          </div>
          :
          device.types.map(type =>
            <div
              className={`category-item ${type.id === device.selectedType.id && "active"}`}
              onClick={() => device.setSelectedType(type)}
              key={type.id}>
              <span>{type.name} &gt;</span>
            </div>
          )
        }
      </div>
    </div>
  )
})

export default CategoryBar;
