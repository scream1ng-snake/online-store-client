import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Form, InputGroup } from "react-bootstrap";
import { updateBrand, searchBrand } from "../../../http/deviceAPI";
import ModalHeader from '../modalComponents/ModalHeader';
import ModalTypesList from '../modalComponents/ModalTypesList';
import ModalSpinner from '../modalComponents/Spinner';

const PutBrand = ({ show, onHide }) => {
  const [brand, setBrand] = useState(null);
  const [findName, setFindName] = useState("");
  const [foundBrands, setFoundBrands] = useState([]);
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const putBrand = () => {
    updateBrand(brand.id, { name: value }).then(data => {
      close()
    })
  }

  const findBrand = () => {
    setIsLoading(true)
    searchBrand(findName).then(data => {
      setFoundBrands(data.rows)
      setIsLoading(false)
    })
  }

  const close = () => {
    setBrand(null)
    setFindName("")
    setFoundBrands([])
    setValue("")
    onHide()
  }

  return (
    <Modal
      show={show}
      onHide={close}
      centered
    >
      <ModalHeader title={"Изменить бренд"} />
      <Modal.Body>
        <Form>
          <InputGroup>
            <Form.Control
              value={findName}
              onChange={e => setFindName(e.target.value)}
              placeholder={"Найти по названию"}
            />
            <Button variant='dark' onClick={findBrand}>Искать</Button>
          </InputGroup>
          {isLoading
            ? <ModalSpinner /> 
            : <ModalTypesList foundTypes={foundBrands} setType={setBrand} />
          }
          {brand &&
            <Form.Control
              className="mt-3"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder={"Новое название типа"}
            />
          }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={close}>Закрыть</Button>
        <Button disabled={!brand} variant="success" onClick={putBrand}>Сохранить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PutBrand;
