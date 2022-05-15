import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [error, setError] = useState("");

  const SubmitHandler = async (e) => {
    e.preventDefault();

    const matricNo = e.target.matricNo.value;
    const password = e.target.password.value;

    // console.log(matricNo, password);

    axios
      .post("https://ict-chain-01.herokuapp.com/Authentication/student/login", {
        matricNo: matricNo,
        password: password,
      })
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => {
        console.log(error);
        // console.log(error.response.data.request.description);
        // localStorage.setItem("error", error.response.data.request.description);
        setError(error.message);
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="login__container ">
        <div className="bg">
          <h1>Student Login</h1>
        </div>
        <div className="login__container__wrapper">
          <div className="login__container__box">
            <h5> Sign in with credentials</h5>
            <br />
            <h4 className="error__message">{error}</h4>
            <form onSubmit={SubmitHandler}>
              <input
                className="form-control"
                type="number"
                placeholder="matricNo"
                name="matricNo"
                // value={username}
                required
                onChange={(e) => e.target.value}
              />
              <br />
              <input
                className="form-control"
                type="text"
                name="password"
                // value={password}
                required
                minLength={5}
                onChange={(e) => e.target.value}
                placeholder="Password"
              />
              <br />
              <br />

              <div className="checkbox-crl">
                <input className="checkbox-control" type="checkbox" />
                <span>Remember me</span>
              </div>
              <button className="form-control form-control-btn " type="submit">
                Sign in
              </button>
              <br />
              <br />
            </form>
            <div className="register">
              <Link href="/auths/reset">
                <a>
                  <span>
                    <p>Forgot your password ?</p>
                  </span>
                </a>
              </Link>
              <Link href="/auths/signup">
                <a>
                  <span>
                    <p>Create new account</p>
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
