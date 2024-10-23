import Form from "react-bootstrap/Form";
import { useRef } from "react";
import { verifyUser } from "../../DATA/users";

import "./Login.css";


function Login({setToken,setRole}) {
const userRef = useRef()
const passRef = useRef()

  return (
    <div className="login-container">
      <Form.Label htmlFor="username">Username</Form.Label>
      <Form.Control
        type="text"
        id="username"
        placeholder="user"
        style={{ textAlign: "center" }}
        ref = {userRef}
      />
      <Form.Label htmlFor="password">Password</Form.Label>
      <Form.Control
        type="password"
        id="password"
        placeholder="pass"
        style={{ textAlign: "center" }}
        ref={passRef}
      />
      <button className="btn btn-success mt-3" onClick={() => {
        const user = userRef.current.value.trim()
        const pass = passRef.current.value.trim()
        const userInfo = verifyUser(user,pass)
        userRef.current.value = ''
        passRef.current.value = ''    

        if(userInfo === null){

          alert('Username or Password is incorrect')
          userRef.current.focus()

        }else{
            setRole(userInfo.role)
            setToken(userInfo.token)

        }

      }}>Login</button>
    </div>
  );
}

export default Login;
