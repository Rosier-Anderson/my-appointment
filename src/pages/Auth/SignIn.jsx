import React from 'react'
import './signIn.scss'
export default function SignIn() {
  return (
    <article className="sign-up sign-in margin flex padding-4-vertical">
    <header className="sign-up-header padding-4-horizontal">
      <h1 className="sign-up-title ">Login</h1>
      <p className="sign-up-subtitle ">
        Please log in to book an appointment
      </p>
    </header>

    <form className="sign-up-form flex padding-4-horizontal">
     

      <label className="sign-up-label" htmlFor="email">
        Email
      </label>
      <input className="sign-up-input" type="email" id="email" />

      <label className="sign-up-label" htmlFor="password">
        Password
      </label>
      <input className="sign-up-input" type="password" id="password" />
    </form>

    <button className="sign-up-button  btn ">Login</button>

    <p className="sign-up-footer ">
      Create a new account?{" "}
      <a className="sign-up-link" href="#">
        Click here 
      </a>
    </p>
  </article>

  )
}
