import React from "react";
import Images from "../../Helpers/Files";
import "./doctorsBadges.scss";
export default function DoctorsBadge() {
  return (
    <section className="doctors-list margin-7-horizontal">
      <h1 className="doctors-list-title text-center ">Top Doctors to Book</h1>
      <p className="doctors-list-subtitle text-center">
        Simply brownse through our extensive list of trusted doctors.
      </p>

      <article className="doctor-badge hover2">
        <figure className="doctor-badge-img">
          <img
            className="badge-img"
            src={Images("./doc1.png")}
            alt="Doctor's portrait"
          />
        </figure>
        <div className=" doctor-badge-info margin-3-vertical">
          <div className="doctor-badge-availability">
            {/* Dot for availability */}
            <span className="doctor-badge-status-dot" aria-hidden="true"></span>
            <p className="doctor-badge-status-text pReset">Available</p>
          </div>

          <h2 className="doctor-badge-name">Dr. Thimothy White</h2>
          <p className="doctor-badge-specialty pReset">Gynecologist</p>
        </div>
      </article>
    </section>
  );
}
