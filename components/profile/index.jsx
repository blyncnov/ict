import React from "react";

const ProfilePage = () => {
  return (
    <>
      <h5>Profile Page</h5>
      <div className="profile__dashboard__container">
        <div className="profile__dashboard__box extra__profile__info">
          <div className="profile__image__circle"></div>
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
            Date Of Birth : <span>28th May 2021</span>
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
    </>
  );
};

export default ProfilePage;
