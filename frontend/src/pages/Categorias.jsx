import React from 'react'
import Categoria from '../components/Categoria'

const Categorias = () => {
    const products = [
        {
            id: 1,
            title: "Category 1",
            description: "This is category 1",
            price: 100
        },
        {
            id: 2,
            title: "Category 2",
            description: "This is category 2",
            price: 200
        },
        {
            id: 3,
            title: "Category 3",
            description: "This is category 3",
            price: 300
        },
        {
            id: 4,
            title: "Category 4",
            description: "This is category 4",
            price: 400
        }
    ]

  return (
    <div className='min-h-[80vh] w-full bg-current flex flex-col justify-center items-center'>
        <div className='grid grid-cols-2 m-0 p-0'>
        {products.map((item) => (
                    <Categoria item={item} />
                ))}
        </div>
    </div>
  )
}

export default Categorias
