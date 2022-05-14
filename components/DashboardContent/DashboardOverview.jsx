import React from "react";
import Image from "next/image";

const DashboardOverview = () => {
  return (
    <>
      <h5>Dashboard Overview </h5>
      <div className="profile__overview">
        <div className="profile__dashboard__container">
          <div className="profile__dashboard__box extra__profile__info">
            <div className="profile__image__circle">
              <Image
                src="/img_1.jpeg"
                width="100%"
                height="100%"
                alt="profile image"
              />
            </div>
            <hr />
            <h2>Taiwo Boluwatife Jeremiah</h2>
            <div className="student__level">
              <h4>200 Level </h4>
            </div>
          </div>
          <div className="profile__dashboard__box extra__additional__info">
            <h4>
              Full Name : <span>Taiwo Boluwatife Jeremiah</span>
            </h4>
            <h4>
              Gender : <span>Male</span>
            </h4>
            <h4>
              Nationality : <span>Nigeria</span>
            </h4>
            <h4>
              Date Of Birth : <span>48th May 2071</span>
            </h4>
            <h4>
              Matric No : <span>2038492849</span>
            </h4>
            <h4>
              Accumulated GP : <span>4.5</span>{" "}
              <span className="GPU__tag">First Class</span>
            </h4>
            <h4>
              Department : <span>Mathematics</span>
            </h4>
            <h4>
              Religion : <span>Christian</span>
            </h4>
          </div>
        </div>
        <div className="profile__other__infomation">
          <div className="profile__dashboard__box extra__additional__info">
            <h4>
              Fathers Name : <span>Taiwo Blyncnov Olarewaju</span>
            </h4>
            <h4>
              Mothers Name :<span>Iyanuoluwa Joy Marvellous</span>
            </h4>
            <h4>
              Phone Number : <span>08149055068, 090464872672</span>
            </h4>
            <h4>
              Date Of Birth : <span>57th May 2098</span>
            </h4>
            <h4>
              Complexity : <span>hard</span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardOverview;

// Email, address, phone number, date of birth, father and mother name,
