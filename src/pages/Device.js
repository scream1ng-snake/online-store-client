import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { fetchOneDevice } from "../http/deviceAPI";
import bigStar from '../assets/star.png';

export default function Device() {

  const [device, setDevice] = useState({ info: [] })
  const { id } = useParams()
  useEffect(() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [])

  
  return (
    <section className="product-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="product-pic-zoom">
              <img src={process.env.REACT_APP_API_URL + device.image} alt="" />
            </div>
          </div>
          <div className="col-lg-6 product-details">
            <h2 className="p-title">{device.name}</h2>
            <h3 className="p-price">${device.price}</h3>
            <h4 className="p-stock">Есть: <span>на скаде</span></h4>
            <div className="p-rating">
              <div style={{ background: `url(${bigStar}) no-repeat center center`, width: 20, height: 20, backgroundSize: 'cover' }}></div>
              <div>{device.rating}</div>
            </div>
            <a href="#" className="site-btn">КУПИТЬ СЕЙЧАС</a>
            <div id="accordion" className="accordion-area">
              <div className="panel">
                <div className="panel-header" id="headingOne">
                  <p className="panel-link" >Информация</p>
                </div>
                <div id="collapse1" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="panel-body">
                    <p>{device.description}</p>
                  </div>
                </div>
              </div>
              <div className="panel">
                <div className="panel-header" id="headingOne">
                  <p className="panel-link" >Характеристики</p>
                </div>
                <div id="collapse1" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div className="panel-body">
                    {!device.info || device.info.length === 0 ?
                      <p>Нет характеристик</p>
                    :
                      device.info.map((info, index) =>
                        <p key={info.id}>
                          {info.title}: {info.description}
                        </p>
                      )

                    }
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
