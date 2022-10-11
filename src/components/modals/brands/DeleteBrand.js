import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Form, InputGroup } from "react-bootstrap";
import { deleteBrand, searchBrand } from "../../../http/deviceAPI";
import ModalHeader from '../modalComponents/ModalHeader';
import ModalTypesList from '../modalComponents/ModalTypesList';
import ModalSpinner from '../modalComponents/Spinner';

const DeleteBrand = ({ show, onHide }) => {
  const [brand, setBrand] = useState(null);
  const [findName, setFindName] = useState("");
  const [foundBrands, setFoundBrands] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const removeBrand = () => {
    deleteBrand(brand.id).then(data => {
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
    onHide()
  }

  return (
    <Modal
      show={show}
      onHide={close}
      centered
    >
      <ModalHeader title={"Удалить бренд"} />
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={close}>Закрыть</Button>
        <Button disabled={!brand} variant="danger" onClick={removeBrand}>Удалить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteBrand;
