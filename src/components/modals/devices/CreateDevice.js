import React, { useContext, useEffect, useState } from 'react';
import Modal from "react-bootstrap/Modal";
import { Button, Form, Row, Col } from "react-bootstrap";
import { Context } from "../../../index";
import { createDevice, fetchBrands, fetchTypes } from "../../../http/deviceAPI";
import ModalHeader from '../modalComponents/ModalHeader';
import ModalDropdown from '../modalComponents/ModalDropdown';
import { observer } from "mobx-react-lite"

const CreateDevice = observer(({ show, onHide }) => {
    const { device } = useContext(Context)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
    const [price, setPrice] = useState(null)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data.rows))
        fetchBrands().then(data => device.setBrands(data.rows))
    }, [])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('image', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('description', description)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => close())
    }

    const close = () => {
        setName("")
        setDescription("")
        setPrice(0)
        setFile(null)
        setInfo([])
        onHide()
    }

    return (
        <Modal
            show={show}
            onHide={close}
            centered
        >
            <ModalHeader title={"Добавить устройство"} />
            <Modal.Body>
                <Form>
                    <ModalDropdown
                        list={device.types}
                        selected={device.selectedType.name}
                        setSelected={(type) => device.setSelectedType(type)}
                        placeholder={"Выберите тип"}
                    />
                    <ModalDropdown
                        list={device.brands}
                        selected={device.selectedBrand.name}
                        setSelected={(brand) => device.setSelectedBrand(brand)}
                        placeholder={"Выберите бренд"}
                    />
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Введите название устройства"
                    />
                    <Form.Control
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className="mt-3"
                        placeholder="Введите описание устройства"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))}
                        className="mt-3"
                        placeholder="Введите стоимость устройства"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr />
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавить новое свойство
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Введите описание свойства"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Удалить
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={close}>Закрыть</Button>
                <Button disabled={!name || !description || !price} variant="success" onClick={addDevice}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
})

export default CreateDevice;
