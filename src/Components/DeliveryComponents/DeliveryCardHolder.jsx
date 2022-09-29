import React from 'react'
import DeliveryCard from '../DeliveryComponents/DeliveryCard'
import { Deliverylist } from '.././../Helpers/DeliveryList'

export default function DeliveryCardHolder() {
  return (
    <>
      <div className="font-Raleway my-5 md:my-7 lg:my-12 text-center text-maroon text-2xl md:text-3xl lg:text-4xl uppercase tracking-widest">
        Deliveries
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center mb-20">
        {
          Deliverylist.map((e) => {
            return <DeliveryCard title={e.title} bg={e.bg} color={e.color} date={e.date} time={e.time} location={e.location} customer={e.customer} phone={e.phone} deliveryStatus={e.deliveryStatus} paymentStatus={e.paymentStatus} paymentMethod={e.paymentMethod} total={e.total} key={e.id} />
          })
        }
      </div>
    </>
  )
}
