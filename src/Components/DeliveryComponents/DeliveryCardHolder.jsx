import React from 'react'
import DeliveryCard from '../DeliveryComponents/DeliveryCard'
import { Deliverylist } from '.././../Helpers/DeliveryList'

export default function DeliveryCardHolder() {
  return (
    <>
        <div className="flex flex-row flex-wrap justify-center items-center">
        {
          Deliverylist.map((e) => {
            return <DeliveryCard title={e.title} bg={e.bg} color={e.color} date={e.date} time={e.time} location={e.location} customer={e.customer} phone={e.phone} deliveryStatus={e.deliveryStatus} paymentStatus={e.paymentStatus} paymentMethod={e.paymentMethod} total={e.total} key={e.id} />
          })
        }
        </div>
    </>
  )
}
