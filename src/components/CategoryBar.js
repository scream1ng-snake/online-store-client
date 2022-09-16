import React, { useContext } from 'react';
import { Context } from "../index";
import { observer } from 'mobx-react-lite';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const CategoryBar = observer(() => {
  const { device } = useContext(Context)

  return (
    <ListGroup as="ul">
      {!device.types || device.types.length === 0 ?
        <ListGroupItem disabled>Нет категорий</ListGroupItem>
        :
        device.types.map(type =>
          <ListGroupItem
            className={type.id === device.selectedType.id && "active"}
            onClick={() => device.setSelectedType(type)}
            key={type.id}
          >
            {type.name}
          </ListGroupItem>
        )
      }
      <ListGroupItem></ListGroupItem>
    </ListGroup>
  )
})

export default CategoryBar;
