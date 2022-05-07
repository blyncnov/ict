import React from "react";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <div className="login__container ">
        <div className="bg">
          <h1>Reset Your Account</h1>
        </div>
        <div className="login__container__wrapper">
          <div className="login__container__box">
            <h5> Reset Your Credentials</h5>
            <br />
            <form>
              <input className="form-control" type="text" placeholder="Email" />
              <button className="form-control form-control-btn " type="submit">
                Reset Password
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
              <Link href="/auths/signup">
                <a>
                  <span>
                    <p>Create a new account</p>
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
