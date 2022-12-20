import React, { useState } from "react";
import './App.css';
// import Axios from "axios";
import axios from "axios";

function App() {

  const [usernameReg, setUsernameReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")


  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const [loginStatus, setLoginStatus] = useState("")

  const register = ()=>{
    axios.post('http://localhost:8000/register', {username: usernameReg, password: passwordReg}).then((response)=>{
      console.log(response)
    })
  }

  const login = ()=>{
    axios.post('http://localhost:8000/login', {username: username, password: password}).then((response)=>{
      if(response.data.message){
        // setLoginStatus(response.data.message)
        setLoginStatus(response.data.message)
      }else{
        setLoginStatus(response.data[0].username)
        // setLoginStatus(console.log(response.data[0].username))
        
      }
    })
  }


  return (
    <div className="App">
      <div className="registration">
        <h1>Registration</h1>
        <label for="#">Username:</label>
        <input type="text" placeholder="Enter the Username" onChange={(e) => {
          setUsernameReg(e.target.value);
          
        }} />
        <label for="#">Password:</label>
        <input type="text" placeholder="Enter the Password" onChange={(e)=>{
          setPasswordReg(e.target.value);
        }} />
        <button onClick={register}>Register</button>
      </div>

      <div className="login">
        <h1>login</h1>
        <input type="text" placeholder="Username" onChange={(e)=>{
          setUsername(e.target.value);
        }} />
        <input type="text" placeholder="Password" onChange={(e)=>{
          setPassword(e.target.value);
        }} />
        <button onClick={login}>Login</button>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}

export default App;
