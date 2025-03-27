import React from "react";
import './about.scss'
import Images from "../../Helpers/Files";
export default function About() {
  return (
    <div className="about">
    <h1 className="about-header">
      ABOUT <span className="highlight">US</span>
    </h1>
  
    <section className="about-content flex">
      <figure className="about-figure">
        <img src={Images('./about_image.png')} alt="About Prescripto" className="about-image"/>
      </figure>
      <div className="about-text-wrapper">
        <p className="about-text">
        Welcome to Prescripto, your trusted partner in managing your healthcare
        needs conveniently and efficiently. At Prescripto, we understand the
        challenges individuals face when it comes to scheduling doctor
        appointments and managing their health records.
      </p>
      <p className="about-text">
        Prescripto is committed to excellence in healthcare technology. We
        continuously strive to enhance our platform, integrating the latest
        advancements to improve user experience and deliver superior service.
        Whether you're booking your first appointment or managing ongoing care,
        Prescripto is here to support you every step of the way.
      </p>
      <h3 className="about-subtitle">Our Vision</h3>
      <p className="about-text">
        Our vision at Prescripto is to create a seamless healthcare experience
        for every user. We aim to bridge the gap between patients and healthcare
        providers, making it easier for you to access the care you need, when you
        need it.
      </p>
      </div>
      
    </section>
  
    <section className="why-choose-us">
      <h1 className="why-header">
        WHY <span className="highlight">CHOOSE US</span>
      </h1>
  
      <article className="why-item">
        <h2 className="why-title">EFFICIENCY:</h2>
        <p className="why-text">
          Streamlined appointment scheduling <br /> that fits into your busy
          lifestyle.
        </p>
      </article>
  
      <article className="why-item">
        <h2 className="why-title">CONVENIENCE:</h2>
        <p className="why-text">
          Access to a network of trusted <br /> healthcare professionals in your
          area.
        </p>
      </article>
  
      <article className="why-item">
        <h2 className="why-title">PERSONALIZATION:</h2>
        <p className="why-text">
          Tailored recommendations and reminders to <br /> help you stay on top of
          your health.
        </p>
      </article>
    </section>
  </div>
  
  );
}
