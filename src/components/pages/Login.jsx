import React from "react";
import '../pages/Login.css'

export const Login = () => {
  return (
    <>
    <h1>Login</h1>
    <div className="formulario">
      <label htmlFor="username">Username:</label>
      <input
      type="Text"
      id="username"
      name="username"
      required
      />
      </div> 
      <div className="formulario_1">
        <label htmlFor="password">Password:</label>
        <input
         type="Text"
         id="password"
         name="password"
         required
        />
      </div>
      <button className="buton_" type="submit">Inicio</button>
      <button className="buton_1" type="submit">Olvide mi contraseña</button>
      </>
      
      
  );
};
