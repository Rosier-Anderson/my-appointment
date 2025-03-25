import React from "react";
import { doctors } from "../../Helpers/Files";
import "./doctorsBadges.scss";
export default function DoctorsBadge() {
  return (
    <>
    
    <div className="doctors-list-wrapper ">
        {doctors.map((doctor) => (
          <article className="doctor-badge hover2 margin" key={doctor._id}>
            <figure className="doctor-badge-img">
              <img
                className="badge-img"
                src={doctor.image}
                alt="Doctor's portrait"
              />
            </figure>
            <div className=" doctor-badge-info margin-3-vertical">
              <div className="doctor-badge-availability">
                {/* Dot for availability */}
                <span
                  className="doctor-badge-status-dot"
                  aria-hidden="true"
                ></span>
                <p className="doctor-badge-status-text pReset">Available</p>
              </div>

              <h2 className="doctor-badge-name">{doctor.name}</h2>
              <p className="doctor-badge-specialty pReset">
                {doctor.speciality}
              </p>
            </div>
          </article>
        ))}
      </div>
      <button className="btn doctors-list-btn margin text-center">more</button>
  
    </>
      
  );
}
