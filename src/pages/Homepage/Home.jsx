import React from "react";
import "./home.scss";
import Images, { specialityData } from "../../Helpers/Files";
import DoctorsBadge from "../../components/Doctors/DoctorsBadge";

export default function Home() {
  return (
    <div className="home">
      <Panel />
      <section className="speciality flex margin-5-horizontal">
        <h1 className="speciality-title">Find by Speciality</h1>
        <p className="speciality-desc text-center">
          Simply brownse through our extensive list of trusted doctors, <br />{" "}
          schedule your appointment hassle-free.
        </p>
        <div className="speciality-list flex">
          {specialityData.map((speciality, id) => {
            return (
              <a
                href={speciality.link}
                className="speciality-item hover2 "
                key={id}
              >
                <img
                  src={Images(`${speciality.image}`)}
                  alt={speciality.alt}
                  className="speciality-item-img margin"
                />
                <p className="speciality-item-desc">{speciality.speciality}</p>
              </a>
            );
          })}
        </div>
      </section>
      <section className="doctors-list margin-7-horizontal ">
        <h1 className="doctors-list-title text-center ">Top Doctors to Book</h1>
        <p className="doctors-list-subtitle text-center">
          Simply brownse through our extensive list of trusted doctors.
        </p>
        {/* Imported the doctors Badge */}

        <DoctorsBadge />

        <button className="btn doctors-list-btn margin text-center">
          more
        </button>
      </section>
      <AppointmentBanner />
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
const AppointmentBanner = () => {
  return (
    <section className="appointmentBanner flex ">
      <div className="appointment-content margin-6-vertical">
        <h1 className="appointment-title">
          Book Appointment <br /> With 100+ Trusted Doctors
        </h1>
        <button className="appointment-btn  btn text-center">
          Create account{" "}
        </button>
      </div>

      <img
        src={Images("./appointment_img.png")}
        alt="doctors pictures "
        className="appointment-doctor-img  margin-6-horizontal"
      />
    </section>
  );
};
