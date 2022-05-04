import React from "react";
import Link from "next/link";

const PreHomeDisplay = () => {
  return (
    <>
      <div className="preHome__container">
        <div className="preHome__container--text">
          <h1 id="preHome__title">ICT DECENTRALIZED APPLICATION</h1>
        </div>
      </div>
      <div className="login__as">
        <div className="contrain">
          <div className="login__as--box">
            <div className="login__as--box--text">
              <h1>STUDENT LOGIN</h1>
              <br />
              <h4>Strictly for Student only</h4>
              <Link href="/auths/login">
                <a>
                  <button className="login__btn">Login As Student</button>
                </a>
              </Link>
            </div>

            <div className="login__as--box--text">
              <h1>ADMIN LOGIN</h1>
              <br />
              <h4>Strictly for Admin only</h4>
              <Link href="/auths/login">
                <a>
                  <button className="login__btn">Login As Admin</button>
                </a>
              </Link>
            </div>

            <div className="login__as--box--text">
              <h1>DEPARTMENT LOGIN</h1>
              <br />
              <h4>Strictly for departments only</h4>
              <Link href="/auths/login">
                <a>
                  <button className="login__btn">Login As Departments</button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PreHomeDisplay;
