import React, { useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { createType } from "../../../http/deviceAPI";
import ModalHeader from '../modalComponents/ModalHeader';

const CreateType = ({ show, onHide }) => {
    const [value, setValue] = useState('')

    const addType = () => {
        createType({ name: value }).then(data => {
            close()
        })
    }

    const close = () => {
        setValue("")
        onHide()
    }

    return (
        <Modal
            show={show}
            onHide={close}
            centered
        >
            <ModalHeader title={"Добавить тип"} />
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={close}>Закрыть</Button>
                <Button disabled={!value} variant="success" onClick={addType}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateType;
