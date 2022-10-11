import React, { useState } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import CreateBrand from "../components/modals/brands/CreateBrand";
import DeleteBrand from '../components/modals/brands/DeleteBrand';
import PutBrand from '../components/modals/brands/PutBrand';
import CreateDevice from "../components/modals/devices/CreateDevice";
import CreateType from "../components/modals/types/CreateType";
import DeleteType from '../components/modals/types/DeleteType';
import PutType from '../components/modals/types/PutType';

export default function Admin() {
  const [addBrandVisible, setAddBrandVisible] = useState(false)
  const [putBrandVisible, setPutBrandVisible] = useState(false)
  const [deleteBrandVisible, setDeleteBrandVisible] = useState(false)

  const [addTypeVisible, setAddTypeVisible] = useState(false)
  const [putTypeVisible, setPutTypeVisible] = useState(false)
  const [deleteTypeVisible, setDeleteTypeVisible] = useState(false)

  const [addDeviceVisible, setAddDeviceVisible] = useState(false)


  return (
    <Container>
      <Row>
        <Col md={3}>
          <div className='admin-bar'>
            <Row>
              <div className='category-title'>Типы</div>
              <Button
                variant={"dark"}
                className="mt-3 p-2"
                onClick={() => setAddTypeVisible(true)}
              >
                Добавить тип
              </Button>
              <Button
                variant={"dark"}
                className="mt-3 p-2"
                onClick={() => setPutTypeVisible(true)}
              >
                Изменить тип
              </Button>
              <Button
                variant={"dark"}
                className="mt-3 p-2"
                onClick={() => setDeleteTypeVisible(true)}
              >
                Удалить тип
              </Button>
            </Row>
          </div>
        </Col>
        <Col md={3}>
          <div className='admin-bar'>
            <Row>
              <div className='category-title'>Бренды</div>
              <Button
                variant={"dark"}
                className="mt-3 p-2"
                onClick={() => setAddBrandVisible(true)}
              >
                Добавить бренд
              </Button>
              <Button
                variant={"dark"}
                className="mt-3 p-2"
                onClick={() => setPutBrandVisible(true)}
              >
                Изменить бренд
              </Button>
              <Button
                variant={"dark"}
                className="mt-3 p-2"
                onClick={() => setDeleteBrandVisible(true)}
              >
                Удалить бренд
              </Button>
            </Row>
          </div>
        </Col>
        <Col md={3}>
          <div className='admin-bar'>
            <Row>
              <div className='category-title'>Товары</div>
              <Button
                variant={"dark"}
                className="mt-3 p-2"
                onClick={() => setAddDeviceVisible(true)}
              >
                Добавить товар
              </Button>
            </Row>
          </div>
        </Col>
        <Col md={3}>
          <div className='admin-bar'>
            <Row>
              <div className='category-title'>Рубрики</div>
              <Button
                variant={"dark"}
                className="mt-3 p-2"
              >
                Добавить рубрику
              </Button>
            </Row>
          </div>
        </Col>
      </Row>

      {/* Modals */}

      <CreateBrand show={addBrandVisible} onHide={() => setAddBrandVisible(false)} />
      <PutBrand show={putBrandVisible} onHide={() => setPutBrandVisible(false)} />
      <DeleteBrand show={deleteBrandVisible} onHide={() => setDeleteBrandVisible(false)} />

      <CreateDevice show={addDeviceVisible} onHide={() => setAddDeviceVisible(false)} />

      <CreateType show={addTypeVisible} onHide={() => setAddTypeVisible(false)} />
      <PutType show={putTypeVisible} onHide={() => setPutTypeVisible(false)} />
      <DeleteType show={deleteTypeVisible} onHide={() => setDeleteTypeVisible(false)} />
    </Container>
  );
}