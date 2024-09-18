import React from 'react'

const Categoria = (item) => {

    const product = item.item
    const id = product.id
    const title = product.title
    const description = product.description


    return (
        <div key={id} className="card bg-primary text-primary-content w-96 m-4">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn">Ver ahora</button>
                </div>
            </div>
        </div>
    )
}

export default Categoria
