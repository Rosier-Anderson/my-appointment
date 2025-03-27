import React from "react";
import "./signUp.scss";
export default function SignUp() {
  return (
    <article className="sign-up margin flex padding-4-vertical">
      <header className="sign-up-header padding-4-horizontal">
        <h1 className="sign-up-title ">Create Account</h1>
        <p className="sign-up-subtitle ">
          Please sign up to book an appointment
        </p>
      </header>

      <form className="sign-up-form flex padding-4-horizontal">
        <label className="sign-up-label" htmlFor="full-name">
          Full name
        </label>
        <input className="sign-up-input" type="text" id="full-name" />

        <label className="sign-up-label" htmlFor="email">
          Email
        </label>
        <input className="sign-up-input" type="email" id="email" />

        <label className="sign-up-label" htmlFor="password">
          Password
        </label>
        <input className="sign-up-input" type="password" id="password" />
      </form>

      <button className="sign-up-button  btn ">Create account</button>

      <p className="sign-up-footer ">
        Already have an account?{" "}
        <a className="sign-up-link" href="#">
          Login here
        </a>
      </p>
    </article>
  );
}
