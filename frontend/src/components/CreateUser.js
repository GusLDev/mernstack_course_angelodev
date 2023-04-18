import React from 'react'

const CreateUser = () => {
  return (
    <div className='col-md-6 offset-md-3'>
      <div className='card card-body'>
        <form>
          <h2 className='text-center mb-3'>Crear Usuario</h2>
          <div className='mb-3'>
            <label>
              Nombre:
            </label>
            <input type='text' className='form-control' placeholder='Introduce username' required />
          </div>
          <div className='mb-3'>
            <label>
              Apellido:
            </label>
            <input type='text' className='form-control' placeholder='Introduce user lastname' required />
          </div>
          <div className='mb-3'>
            <label>
              Age:
            </label>
            <input type='number' className='form-control' placeholder='Introduce user age' required />
          </div>
          <div className='mb-3'>
            <label>
              Phone:
            </label>
            <input type='number' className='form-control' placeholder='Introduce user phone number' required />
          </div>
          <div className='mb-3'>
            <label>
              Email:
            </label>
            <input type='text' className='form-control' placeholder='Introduce user email' required />
          </div>
          <button className='btn btn-primary form-control'>Guardar Usuario</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
