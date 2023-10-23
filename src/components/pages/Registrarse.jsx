import React from "react";
import '../pages/Registrarse.css'

export const Registrarse = () => {
  return (
    <>
      <h1>Registrarse</h1>
      <div className="formulario">
        <label htmlFor="name">Nombre:</label>
        <input
        type="Text"
        id="name"
        name="name"
        required
        />
        </div>
      <div className="formulario_1">
        <label htmlFor="apellido">Apellido:</label>
        <input
        type="Text"
        id="apellido"
        name="apellido"
        required
        />
      </div>
      <div className="formulario_2">
        <label htmlFor="email">Email:</label>
        <input
        type="Text"
        id="email"
        name="email"
        required
        />
      </div>
      <div className="formulario_3">
        <label htmlFor="password">Password: </label>
        <input
        type="Text"
        id="password"
        name="password"
        required
        />
        </div>
        <div className="formulario_4">
        <label htmlFor="confirmPassword">ConfirmPassword:</label>
        <input
        type="Text"
        id="confirmPassword"
        name="confirmPassword"
        required
        />
      </div>
    </>
  );
};
