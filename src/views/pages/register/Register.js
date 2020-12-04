import React, { useState } from "react";
import Mynavbar from "../../Sharedcomponents/Mynavbar.js";
import Myfooter from "../../Sharedcomponents/Myfooter.js";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
  let history = useHistory();
  const [newnutriologistInfo, setNewNutriologistInfo] = useState({
    name: "",
    address: "",
    identificationCard: "",
    birthday: "",
    sex: "",
    email: "",
    password: "",
    clinicName: "",
    telephone: "",
    addressClinic: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setNewNutriologistInfo({
      ...newnutriologistInfo,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatosNewNutriologist = async (event) => {
    event.preventDefault();
    try {
      const respon = await axios.post(
        "http://3.90.64.114/api/v1/web/patient",
        newnutriologistInfo
      );
      history.push("/login");
      alert("Cuenta registrada!");
    } catch (error) {
      alert(error.response.data);
    }
  };

  return (
    <div>
      <Mynavbar></Mynavbar>
      <br />
      <div className="container">
        <div className="jumbotron">
          <p className="display-4 text-center lead">Nueva cuenta Nutriólogo</p>
          <hr className="my-4" />
          <form onSubmit={enviarDatosNewNutriologist}>
            <p className="display-8">Datos del Nutriólogo</p>
            <div className="form-group row ">
              <div className="col-sm-6 mb-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Completo"
                  name="name"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-6 mb-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Dirección particular"
                  name="address"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-12 mb-1">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Cédula profesional"
                  name="identificationCard"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="form-group row ">
              <div className="col-sm-6 mb-1">
                <label>Fecha de nacimiento</label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="Fecha de nacimiento"
                  name="birthday"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-6 mb-1">
                <label>Sexo</label>
                <select className="form-control" name="sex">
                  <option>Mujer</option>
                  <option>Hombre</option>
                  <option>Prefiero no especificar</option>
                </select>
              </div>
            </div>
            <p className="display-8">Credenciales de acceso</p>
            <div className="form-group row ">
              <div className="col-sm-6 mb-1">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  name="email"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-6 mb-1">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña"
                  name="password"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <p className="display-8">Datos de la clínica</p>
            <div className="form-group row ">
              <div className="col-sm-6 mb-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre de la clínica"
                  name="clinicName"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-6 mb-1">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Teléfono o celular de la clínica"
                  name="telephone"
                  onChange={handleInputChange}
                />
              </div>
              <div className="col-sm-12 mb-1">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Dirección de la clínica"
                  name="addressClinic"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="d-flex">
              <a className="btn btn-danger btn-lg" href="/">
                Cancelar
              </a>
              <button className="btn btn-primary btn-lg ml-auto" type="submit">
                Crear cuenta
              </button>
            </div>
          </form>
        </div>
      </div>
      <Myfooter></Myfooter>
    </div>
  );
};

export default Register;
