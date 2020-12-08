import React, { useState } from "react";
import Mynavbar from "../../Sharedcomponents/Mynavbar.js";
import Myfooter from "../../Sharedcomponents/Myfooter.js";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  CButton,
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
} from "@coreui/react";

const Login = () => {
  let history = useHistory();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const handleInputChange = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = async (event) => {
    event.preventDefault();
    try {
      const respon = await axios.post(
        "http://3.90.64.114/api/v1/web/login",
        userInfo
      );
      history.push("/dashboard");
      alert("Bienvenido al sistema de nutrición");
    } catch (error) {
      alert(error.response.data);
    }
  };

  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Mynavbar></Mynavbar>

      <br />
      <div className="container">
        <div className="jumbotron">
          <p className="display-4 text-center lead">Iniciar sesión</p>
          <hr className="my-4" />
          <form onSubmit={enviarDatos}>
            <p className="display-8 text-center">Credenciales de acceso</p>
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
                  placeholder="Contraseña!"
                  name="password"
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="d-flex">
              <a className="btn btn-danger btn-lg" href="#">
                Cancelar
              </a>
              <button className="btn btn-primary btn-lg ml-auto" type="submit">
                Iniciar sesión
              </button>
            </div>
            <hr className="my-4" />
            <div className="form-group row ">
              <div className="col-sm-6 mb-1">
                {/* <a href="" className="text-info">
                  ¿Olvidaste tu contraseña?
                </a> */}
                <CButton className="mr-1" onClick={toggle}>
                  ¿Olvidaste tu contraseña?{" "}
                </CButton>
              </div>
              <div className="col-sm-6 mb-1">
                <a href="#register" className="text-info">
                  ¿No tiene una cuenta?
                </a>
              </div>
            </div>
          </form>
          <CModal show={modal} onClose={toggle}>
            <CModalHeader closeButton>Modal title</CModalHeader>
            <CModalBody>Lorem ipsum dolor...</CModalBody>
            <CModalFooter>
              <CButton color="primary">Do Something</CButton>{" "}
              <CButton color="secondary" onClick={toggle}>
                Cancel
              </CButton>
            </CModalFooter>
          </CModal>
        </div>
      </div>
      <Myfooter></Myfooter>
    </div>
  );
};

export default Login;
