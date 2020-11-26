import React, { useState } from "react";
import Mynavbar from "../../Sharedcomponents/Mynavbar.js";
import Myfooter from "../../Sharedcomponents/Myfooter.js";
import axios from "axios";

const Login = () => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });

  const SaveData = async (UserInfo) => {
    debugger;
    console.log(UserInfo);
    try {
      const respon = await axios.post(
        "http://3.90.64.114/api/v1/web/login",
        UserInfo
      );
    } catch (error) {}
  };

  return (
    <div>
      <Mynavbar></Mynavbar>

      <br />
      <div className="container">
        <div className="jumbotron">
          <p className="display-4 text-center lead">Iniciar sesión</p>
          <hr className="my-4" />
          <form>
            <p className="display-8 text-center">Credenciales de acceso</p>
            <div className="form-group row ">
              <div className="col-sm-6 mb-1">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Correo electrónico"
                  name="email"
                  onChange={(e) => setUserInfo(e.target.value)}
                />
              </div>
              <div className="col-sm-6 mb-1">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Contraseña!"
                  name="password"
                  onChange={(e) => setUserInfo(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex">
              <a className="btn btn-danger btn-lg" href="#">
                Cancelar
              </a>
              <button
                className="btn btn-primary btn-lg ml-auto"
                type="submit"
                onClick={() => SaveData(userInfo)}
              >
                Iniciar sesión
              </button>
            </div>
            <hr className="my-4" />
            <div className="form-group row ">
              <div className="col-sm-6 mb-1">
                <a href="" className="text-info">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
              <div className="col-sm-6 mb-1">
                <a href="" className="text-info">
                  ¿No tiene una cuenta?
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Myfooter></Myfooter>
    </div>
  );
};

export default Login;
