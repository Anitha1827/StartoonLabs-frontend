import './App.css';
import SignUp from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import Login from './Components/LoginPage';
import { Route, Routes } from 'react-router';



function App() {
 
  return (
    <div className="App">
   <Routes>
    <Route exact path="/home" element={<Dashboard/>} />
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
    </div>
  );
}

export default App;
