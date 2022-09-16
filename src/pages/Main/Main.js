import React from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Container, Col, Image } from "react-bootstrap";
import main from "../../assets/images/Gibson_Les_Paul_Bullseye_Zakk_Wyld 1.png";
import guitarImage from "../../assets/images/smallGuitar.png";
import legendImage from "../../assets/images/bigGuitar.png";
import bgImage from "../../assets/images/bgImage.png";
import legendImg from "../../assets/test/legendImage.png"
import { GuitarCarusel } from '../../components/Carusel/GuitarCarusel';

function MainPage() {
  return (
    <div className='landing'>
      <div className="Main">
        <Container>
          <h1 className='Main-header'>КАЧЕСТВЕННЫЙ <br />  МУЗЫКАЛЬНЫЙ  ИНСТРУМЕНТ</h1>
          <Row className='Main-description'>
            <Col className='Years'>
              <p className='Main-years'>1970 - 2022</p>
            </Col>
            <Col>
              <p className='Main-subtitle'>ИНСТРУМЕНТ, ПРОШЕДШИЙ <br /> ПРОВЕРКУ ВРЕМЕНЕМ</p>
            </Col>
          </Row>
          <Row className='Main-links'>
            <Col>
              <NavLink className="Link" to={"#"}>ВОСПОЛЬЗУЙТЕСЬ ПОИСКОМ &gt;</NavLink>
            </Col>
            <Col>
              <NavLink className="Link" to={"#"}>СМОТРЕТЬ КОЛЛЕКЦИИ &gt;</NavLink>
            </Col>
          </Row>
          <Col className='Main-image'>
            <Image src={main} />
          </Col>
        </Container>
      </div>

      <div className='promo'>
        <p className="promo-text">НОВАЯ  РУБРИКА!!!  ЛЕГЕНДАРНЫЕ  ИНСТРУМЕНТЫ</p>
      </div>

      <div className='legend'>
        <Container>
          <Row>
            <Col xxl={6} className="legend-mark">
              <div className='legend-label'>
                ЛЕГЕНДЫ
              </div>
              <div className='legend-title'>
                <p>ГИТАРЫ</p>
                <p>ЛЕГЕНДАРНЫХ</p>
                <p className='legend-accent'>ГРУПП</p>
                <div className='legend-groups'>
                  <p>ТАКИХ КАК:</p>
                  <div className='group-list'>
                    <p>GUNS N' ROSES</p>
                    <p>LED ZEPPELIN</p>
                    <p>KISS</p>
                    <p>BLACK SABBATH</p>
                  </div>
                </div>
                <NavLink className="Link" to={"#"}>СМОТРЕТЬ КОЛЛЕКЦИИ &gt;</NavLink>
                <Image className='legend-image' src={guitarImage} />
              </div>
            </Col>
            <Col>
              <Image src={legendImage} />
            </Col>
          </Row>
        </Container>
      </div>

      <div className='promo'>
        <p className="promo-text">ЧЕХОЛ В ПОАДРОК!!!</p>
      </div>

      <div className='carusel' style={{ background: `url(${bgImage}) no-repeat center center` }}>
        <Container>
          <GuitarCarusel />
        </Container>
      </div>

      <div className='info'>
        <Container>
          <div className='info-block'>
            <Row><div className='info-header'>★ jimmy page ★</div></Row>
            <Row>
              <Col md={4}>
                <div className='info-item'>
                  <p className='info-title'>ТОП-100</p>
                  <p className='info-description'>Входит в топ 100 мировых гитаристов</p>
                </div>
                <div className='info-item'>
                  <p className='info-title'>ТОП-100</p>
                  <p className='info-description'>Входит в топ 100 мировых гитаристов</p>
                </div>
                <div className='info-item'>
                  <p className='info-title'>ТОП-100</p>
                  <p className='info-description'>Входит в топ 100 мировых гитаристов</p>
                </div>
                <div className='info-item'>
                  <p className='info-title'>ТОП-100</p>
                  <p className='info-description'>Входит в топ 100 мировых гитаристов</p>
                </div>
              </Col>
              <Col md={4}>
                <Image src={legendImg} />
              </Col>
              <Col md={4}>
                <p className='info-text'>Британский рок-музыкант, аранжировщик, композитор, музыкальный продюсер и гитарист, стоявший у истоков Led Zeppelin и до самого конца остававшийся музыкальным «мозгом» группы.</p>
                <div className='info-link'>
                  <NavLink className="Link" to={"#"}>СМОТРЕТЬ ГИТАРУ &gt;</NavLink>
                </div>
                <div className='info-link'>
                  <NavLink className="Link" to={"#"}>ДОБАВИТЬ В КОРЗИНУ &gt;</NavLink>
                </div>
                <div className='info-link'>
                  <NavLink className="Link" to={"#"}>КУПИТЬ СЕЙЧАС &gt;</NavLink>
                </div>
              </Col>
            </Row>
            <Row>
              <p className='info-footer'>
                Магазин выполнен –
                <a className="Link" target="blank" href="https://github.com/scream1ng-snake">SCREM1NG-SNAKE</a>
                – 2022
              </p>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MainPage;