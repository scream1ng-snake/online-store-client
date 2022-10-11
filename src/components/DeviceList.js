import React, { useContext } from 'react';
import Product from './ProductItem'
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const DeviceList = observer(() => {
  const { device } = useContext(Context)
  return (
    <div class="device-list">

      {!device.devices || device.devices.length === 0 ?
        <div className='no-devices'><span>Нет товаров</span></div>
      :
        device.devices.map((d) =>
          <Product
            key={d.id}
            device={d}
          />
        )
      }
    </div>
  )
})

export default DeviceList