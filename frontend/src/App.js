import './App.css';
import {Routes,Route} from 'react-router-dom'
//HERE WE ARE IMPORTING COMPONENTS
import Navbar from './components/Navbar';
import CreateUser from './components/CreateUser';
import UserList from './components/UserList';
function App() {
  return (
    <div className="">
      <Navbar/>
      <div className='container p-4'>
        <Routes>
          <Route path='/' element={<UserList/>}/>
          <Route path='/CreateUser' element={<CreateUser/>}/>
          <Route path='/edit/:id' element={<CreateUser/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
