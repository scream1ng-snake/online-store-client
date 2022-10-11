import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Form, InputGroup } from "react-bootstrap";
import { deleteType, searchType } from "../../../http/deviceAPI";
import ModalHeader from '../modalComponents/ModalHeader';
import ModalTypesList from '../modalComponents/ModalTypesList';
import ModalSpinner from '../modalComponents/Spinner';

const DeleteType = ({ show, onHide }) => {
  const [type, setType] = useState(null);
  const [findName, setFindName] = useState("");
  const [foundTypes, setFoundTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const removeType = () => {
    deleteType(type.id).then(data => {
      close()
    })
  }

  const findType = () => {
    setIsLoading(true)
    searchType(findName).then(data => {
      setFoundTypes(data.rows)
      setIsLoading(false)
    })
  }

  const close = () => {
    setType(null)
    setFindName("")
    setFoundTypes([])
    onHide()
  }

  return (
    <Modal
      show={show}
      onHide={close}
      centered
    >
      <ModalHeader title={"Удалить тип"} />
      <Modal.Body>
        <Form>
          <InputGroup>
            <Form.Control
              value={findName}
              onChange={e => setFindName(e.target.value)}
              placeholder={"Найти по названию"}
            />
            <Button variant='dark' onClick={findType}>Искать</Button>
          </InputGroup>
          {isLoading
            ? <ModalSpinner /> 
            : <ModalTypesList foundTypes={foundTypes} setType={setType} />
          }
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={close}>Закрыть</Button>
        <Button disabled={!type} variant="danger" onClick={removeType}>Удалить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteType;
