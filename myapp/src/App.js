import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import ForgotPassword from './Pages/ForgotPassword';
import Register from './Pages/Register';
// import Dashboard from './Dashboard';
import Users from './Components/Users';
import EditUser from './Components/EditUsers';
import CreateUser from './Components/CreateUsers';
import { useState } from 'react'

function App() {
  const [edituser, setEditUser] = useState({
    ID: '0',
    NAME: 'dummy',
    PHONE: "123456789",
  });

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/login' element={<Login />} />
          <Route path='/password' element={<ForgotPassword />} />
          <Route path='/register' element={<Register />} />
          <Route path='/user' element={<Users setEditUser={setEditUser} />} />
          <Route path='/edituser' element={<EditUser editUser={edituser} />} />
          <Route path='/createuser/' element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
