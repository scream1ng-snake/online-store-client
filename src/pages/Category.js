import React from 'react'
import BrandBar from '../components/BrandBar'
import CategoryBar from '../components/CategoryBar'
import DeviceList from '../components/DeviceList'

export default function CategoryPage() {
  return (
    <section class="category-section spad">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 order-2 order-lg-1">
            <CategoryBar />
            <BrandBar />
          </div>
          <div class="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
            <DeviceList />
          </div>
        </div>
      </div>
    </section>
  )
}















