import React from "react";
import "./home.scss";
import Images from '../../Helpers/Files'

export default function Home() {
  return (
    <div className="home">
      <Panel />
      <section className="speciality flex">
        <h1 className="speciality-title">Find Speciality</h1>
        <p className="speciality-desc">
          Simply brownse through our extensive list of trusted doctors, <br />{" "}
          schedule your appointment hassle-free.
        </p>
        <div className="speciality-list">
          <a href="" className="speciality-item">
            <img src="" alt="" className="speciality-img" />
            <p className="speciality-item-desc">General physician</p>
          </a>
          <a href="" className="speciality-item">
            <img src="" alt="" className="speciality-img" />
            <p className="speciality-item-desc">Gynecologist</p>
          </a>
          <a href="" className="speciality-item">
            <img src="" alt="" className="speciality-img" />
            <p className="speciality-item-desc">Dermatologist</p>
          </a>
          <a href="" className="speciality-item">
            <img src="" alt="" className="speciality-img" />
            <p className="speciality-item-desc">Pediatricians</p>
          </a>
          <a href="" className="speciality-item">
            <img src="" alt="" className="speciality-img" />
            <p className="speciality-item-desc">Neurologist</p>
          </a>
          <a href="" className="speciality-item">
            <img src="" alt="" className="speciality-img" />
            <p className="speciality-item-desc">Gastroenterologist</p>
          </a>
        </div>
      </section>
    </div>
  );
}
// The panel component
const Panel = () => {
  return (
    <section className="panel flex margin-4-horizontal">
      <div className="panel-content margin-6-vertical">
        <h1 className="panel-title">
          Book Appointment <br /> With Trust Doctors
        </h1>
        <div className="panel-info">
          <img
            src={Images("./group_profiles.png")}
            alt="profile prictures"
            className="panel-image"
          />
          <p className="panel-description">
            Simply browse through our extensive list of trusted doctors, <br />{" "}
            schedule your appointment hassle-free.
          </p>
        </div>
        <button className="panel-btn btn ">
          Book appointment{" "}
          <span className=" btn-span ">
            <img
              src={Images("./arrow_icon.svg")}
              alt="this is an arrow icon"
              className="btn-arrow "
            />
          </span>
        </button>
      </div>

      <img
        src={Images("./header_img.png")}
        alt="doctors pictures "
        className="panel-doctor-image margin-6-horizontal"
      />
    </section>
  );
};
