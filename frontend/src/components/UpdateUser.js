import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const UpdateUser = () => {
  const initialValue = {
    name: '',
    lastname: '',
    age: 18,
    phone: 0,
    email: ''
  }
  let { id } = useParams();

  const [user, setUser] = useState(initialValue);
  const [subId, setSubId] = useState(id+'');

  const captureData = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  ///////////THIS IS THE LOGIC FOR EDIT 

  const updateUser = async (e) => {
    e.preventDefault();
    const newUser = {
      name: user.name,
      lastname: user.lastname,
      age: user.age,
      phone: user.phone,
      email: user.email
    }
    await axios.put('http://localhost:4000/api/users/' + subId, newUser)
    setUser({ ...initialValue }) //RESET VALUES
    setSubId('')
  }

  const getOne = async (idValue) => {
    const res = await axios.get('http://localhost:4000/api/users/' + idValue)
    setUser({
      name: res.data.name,
      lastname: res.data.lastname,
      age: res.data.age,
      phone: res.data.phone,
      email: res.data.email
    })
  }
  useEffect(() => {
    if (subId !== '') {
      getOne(subId)
    }
  }, [subId])
    return (
      <div className='col-md-6 offset-md-3'>
        <div className='card card-body'>
          <form onSubmit={updateUser}>
            <h2 className='text-center mb-3'>UPDATE USER</h2>
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
                onChange={captureData} />
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
            <button className='btn btn-primary form-control'>UPDATE USER</button>
          </form>
        </div>
      </div>
    )
}

export default UpdateUser
