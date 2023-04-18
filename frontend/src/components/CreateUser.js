import React, { useState } from 'react'
import axios from 'axios'

const CreateUser = () => {
  const initialValue = {
    name: '',
    lastname: '',
    age: 18,
    phone: 0,
    email: ''
  }
  const[user,setUser] = useState(initialValue);

  const captureData = (e) =>{
    const{name,value} = e.target
    setUser({...user,[name]: value})
  }

  const saveData = async(e) =>{
    e.preventDefault();
    //REQUEST TO POST
    const newUser = {
      name: user.name,
      lastname: user.lastname,
      age: user.age,
      phone: user.phone,
      email: user.email
    }

    await axios.post('http://localhost:4000/api/users',newUser)

    setUser({...initialValue}) //RESET VALUES
  }

  return (
    <div className='col-md-6 offset-md-3'>
      <div className='card card-body'>
        <form onSubmit={saveData}>
          <h2 className='text-center mb-3'>Crear Usuario</h2>
          <div className='mb-3'>
            <label>
              Name:
            </label>
            <input type='text' className='form-control' 
            placeholder='Introduce name' required
            name='name' value={user.name}
            onChange={captureData} />
          </div>
          <div className='mb-3'>
            <label>
              Lastname:
            </label>
            <input type='text' className='form-control' 
            placeholder='Introduce user lastname' required
            name='lastname' value={user.lastname}
            onChange={captureData}  />
          </div>
          <div className='mb-3'>
            <label>
              Age:
            </label>
            <input type='number' className='form-control' 
            placeholder='Introduce user age' required 
            name='age' value={user.age}
            onChange={captureData} />
          </div>
          <div className='mb-3'>
            <label>
              Phone:
            </label>
            <input type='number' className='form-control' 
            placeholder='Introduce user phone number' required
            name='phone' value={user.phone} 
            onChange={captureData} />
          </div>
          <div className='mb-3'>
            <label>
              Email:
            </label>
            <input type='text' className='form-control' 
            placeholder='Introduce user email' required 
            name='email' value={user.email}
            onChange={captureData} />
          </div>
          <button className='btn btn-primary form-control'>Guardar Usuario</button>
        </form>
      </div>
    </div>
  )
}

export default CreateUser
