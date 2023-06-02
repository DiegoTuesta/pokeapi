import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import {addName} from '../store/slices/user.slice'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [user, setUser] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const newName= () => {
    if(user.length > 2) {
      dispatch( addName(user)) 
      navigate('/pokedex')
    }else{
      alert('ingrese un nombre')
    }
    
  }

  return (
    <div className="container">
      <div className="content">
        <div className="content-title">
          <img src="/assets/img/pokeapi.svg" alt="pokedex-diego-tuesta" />
        </div>
        <div className="content-body">
          <h2>¡Hi Trainer!</h2>
          <p>enter your name to get started</p>
        </div>
        <div className="content-footer">
          <input onChange={(e) => setUser(e.target.value) } type="text" placeholder="Enter your name" />
          <button onClick={newName} >Start</button>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Login;
