import React from 'react'
import Card from './Card.jsx'

const Cards = () => {
    const products = [
        {
            id: 1,
            title: "Product 1",
            description: "This is product 1",
            price: 100
        },
        {
            id: 2,
            title: "Product 2",
            description: "This is product 2",
            price: 200
        },
        {
            id: 3,
            title: "Product 3",
            description: "This is product 3",
            price: 300
        },
        {
            id: 4,
            title: "Product 4",
            description: "This is product 4",
            price: 400
        }
    ]

    return (
        <>
            <div className='grid grid-cols-2 m-0 p-0'>
                {products.map((item) => (
                    <Card item={item} />
                ))}
            </div>
        </>
    )
}

export default Cards
