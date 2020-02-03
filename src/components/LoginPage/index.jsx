import React from 'react';
import { Link } from 'react-router-dom';

import './LoginPage.scss';
import right_arrow from '../../images/right-arrow.png';

const LoginPage = (props) => {

  return (
    <div className="login">
      <div className="login__title">
        Welcome back
      </div>

      <div className="login__description">
        Sign in to contine to IO Technologies.
      </div>

      <form className="login__login-form" onSubmit={(e) => props.onSubmitForm(e)}>
        <input
          type="text"
          placeholder="Your email"
          className={
            props.emailInputTouchedBool && props.email_valid || props.email_valid ?
              '__emailInput-valid' :
              props.emailInputTouchedBool && !props.email_valid ?
                '__emailInput-invalid' :
                '__emailInput'
          }
          value={props.emailValue}
          onChange={props.emailInputTouchedBool ?
            (e) => props.emailValidatorOnChange(e.target.value) :
            (e) => props.emailInputOnChange(e.target.value)}
          onBlur={(e) => props.emailValidatorOnBlur(e.target.value)}
        />
        <div className={props.emailErrors === '' ? 'emailErrors-hide' : 'emailErrors'}>
          <div className='content'>
            {props.emailErrors}
            <span className="triangle"></span>
          </div>
        </div>
        <input
          type="password"
          placeholder="Password"
          className={
            props.passwordInputTouchedBool && props.password_valid || props.password_valid ?
              '__passwordInput-valid' :
              props.passwordInputTouchedBool && !props.password_valid ?
                '__passwordInput-invalid' :
                '__passwordInput'}
          value={props.passwordValue}
          onChange={props.passwordInputTouchedBool ?
            (e) => props.passwordValidatorOnChange(e.target.value) :
            (e) => props.passwordInputOnChange(e.target.value)}
          onBlur={(e) => props.passwordValidatorOnBlue(e.target.value)}
        />
        <div className={props.passwordErrors === '' ? 'passwordErrors-hide' : 'passwordErrors'}>
          <div className='content'>
            {props.passwordErrors}
            <span className="triangle"></span>
          </div>
        </div>
        <button>LOG in <span><img src={right_arrow} alt="right_arrow"/></span></button>
      </form>

      <div className="login__forgot-password">
        Forgot your password? <Link to="/forgot-password">Reset</Link>
      </div>
    </div>
  );
}

export default LoginPage;
