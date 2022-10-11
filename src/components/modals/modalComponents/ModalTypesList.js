import React from 'react';
import { ListGroup } from "react-bootstrap";

export default function ModalTypesList({foundTypes, setType}) {

  const handleClick = (event, type) => {
    event.preventDefault(); 
    setType(type)
  }

  if (foundTypes.length === 0) return (
    <p>Ничего не найдено</p>
  )
  
  return (
    <>
      <p>Найдено:</p>
      <ListGroup className="mt-3">
        {foundTypes.map((type) => 
          <ListGroup.Item action onClick={(event) => handleClick(event, type)}>
            {type.name}
          </ListGroup.Item>)}
      </ListGroup>
    </>
  )
}
