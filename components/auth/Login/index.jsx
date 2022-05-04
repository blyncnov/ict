import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="login__container ">
        <div className="bg"></div>
        <div className="login__container__wrapper">
          <div className="login__container__box">
            <h5> Sign in with credentials</h5>
            <br />
            <form>
              <input className="form-control" type="text" placeholder="Email" />
              <br />
              <input
                className="form-control"
                type="text"
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
