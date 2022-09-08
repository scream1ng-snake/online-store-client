import React, { useContext } from 'react';
import ProductItem from './ProductItem'
import { observer } from "mobx-react-lite";
import { Context } from "../index";

const DeviceList = observer(() => {
  const { device } = useContext(Context)
  return (
    <div class="row">
      {!device.devices || device.devices.length === 0 ?
        <div>Нет товаров</div>
      :
        device.devices.map((d) =>
          <ProductItem
            key={d.id}
            device={d}
          />
        )
      }
    </div>
  )
})

export default DeviceList