import React, { useState } from 'react';
import {Dropdown} from "react-bootstrap";

const ModalDropdown = ({list, selected, setSelected, placeholder}) => {
  return (
    <Dropdown className="mt-2 mb-2">
      <Dropdown.Toggle variant='dark'>{selected || placeholder}</Dropdown.Toggle>
      <Dropdown.Menu>
        {!list ?
          <div>Ничего не найдено</div>
          :
          list?.map(item =>
            <Dropdown.Item
              onClick={() => setSelected(item)}
              key={item.id}
            >
              {item.name}
            </Dropdown.Item>
          )
        }
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default ModalDropdown
