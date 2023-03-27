import './App.css';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import ForgotPassword from './Pages/ForgotPassword';

function App() {
  return (
    <Router>
      <div className="App">
        <Login />
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/Forgotpassword' element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
