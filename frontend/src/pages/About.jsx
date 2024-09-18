import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='min-h-[80vh] w-full bg-current flex flex-col justify-center items-center'>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Acerca de Nosotros</h1>
            <p className="py-6">
              Paginas web de artesanias de nuestra tierra.
            </p>
            <Link to={'/'}>
            <button className="btn btn-primary">Explora nuestros productos</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
