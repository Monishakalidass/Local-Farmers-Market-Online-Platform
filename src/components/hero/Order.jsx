import React from "react"
import { order } from "../../assets/data/data"
import "./slider.css"

export const Order = () => {
  return (
    <>
      <section className='order'>
        <div className='container grid boxItems'>
          {order.map((item) => (
            <div className='box flexCenter' key={item.id}>
              <div className='num'>
                <div className="h1andh2order">
                <h1>{item.id}</h1>
                </div>
              </div>
              <div className='text'>
                <div className="h3order">
                <h3>{item.title}</h3>
                </div>
                <div className="porder">
                <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
