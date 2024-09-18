import React from 'react'

const Card = (item) => {

    const product = item.item


    const id = product.id
    const title = product.title
    const description = product.description
    const price = product.price

  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl m-4" id={id}>
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">$ {price}</button>
    </div>
  </div>
</div>
  )
}

export default Card
