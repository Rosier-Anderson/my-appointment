import React from "react";
import DoctorsBadge from "./DoctorsBadge";
import "./doctorsPages.scss";
export default function DoctorsPage() {
  return (
    <div className="doctors-page">
      <p className="doctors-intro">Browse through the doctors' specialties.</p>

      <aside className="doctors-sidebar ">
        <ul className="doctors-sidebar-list">
          <li className="doctor-sidebar-item">General Physician</li>
          <li className="doctor-sidebar-item">Gynecologist</li>
          <li className="doctor-sidebar-item">Dermatologist</li>
          <li className="doctor-sidebar-item">Pediatrician</li>
          <li className="doctor-sidebar-item">Neurologist</li>
          <li className="doctor-sidebar-item">Gastroenterologist</li>
        </ul>
      </aside>

      <DoctorsBadge />
    </div>
  );
}
