import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="login__container ">
        <div className="bg">
          <h1>Create a new account</h1>
        </div>
        <div className="login__container__wrapper">
          <div className="login__container__box">
            <h5> Sign Up with credentials</h5>
            <br />
            <form>
              <input className="form-control" type="text" placeholder="Email" />
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="Phone Number"
              />
              <br />
              <input
                className="form-control"
                type="text"
                placeholder="Password"
              />
              <br />
              <button className="form-control form-control-btn " type="submit">
                Sign in
              </button>
              <br />
              <br />
            </form>
            <div className="register">
              <Link href="/auths/login">
                <a>
                  <span>
                    <p>Already have an account?</p>
                  </span>
                </a>
              </Link>
              <Link href="/auths/login">
                <a>
                  <span>
                    <p>Log in</p>
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
