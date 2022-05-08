import React from "react";
import Link from "next/link";

const Login = () => {
  const SubmitHandler = async (e) => {
    e.preventDefault();

    const matricNo = e.target.matricNo.value;
    const password = e.target.password.value;

    const response = await fetch(
      "https://ict-chain-01.herokuapp.com/Authentication/student/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          matricNo,
          password,
        }),
      }
    );

    console.log(response);
  };

  return (
    <>
      <div className="login__container ">
        <div className="bg">
          <h1>Student Login</h1>
        </div>
        <div className="login__container__wrapper">
          <div className="login__container__box">
            <h5> Sign in with credentials</h5>
            <br />
            <form onSubmit={SubmitHandler}>
              <input
                className="form-control"
                type="text"
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
                minLength={8}
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
