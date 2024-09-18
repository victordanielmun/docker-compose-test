import React from 'react'

const Register = () => {
    return (
        <div className='min-h-[80vh] w-full bg-current flex flex-col justify-center items-center'>
            <div className="text-center lg:text-left m-2">
                <h1 className="text-3xl font-bold text-black">Registrate ahora!</h1>
            </div>

            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl my-2">
                <form className="card-body">
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">Nombre de usuario</span>
                        </label>
                        <input type="string" placeholder="username" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Crear cuenta</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
