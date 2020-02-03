import React from 'react';
import { Link } from 'react-router-dom';

import './ForgotPassword.scss';
import left_arrow from '../../images/return.svg';

const ForgotPassword = (props) => {
  let emailInputBorder = '';
  if (props.emailInputTouchedBool && props.email_valid || props.email_valid) {
    emailInputBorder = '-valid'
  } else if (props.emailInputTouchedBool && !props.email_valid) {
    emailInputBorder = '-invalid'
  } else {
    emailInputBorder = ''
  }


  return (
    <div className="forgot-password">
      <div className={props.forgotPasswordFormSubmited ? "forgot-password__info-block--visible": "forgot-password__info-block"}>
        FORM SUBMITED
      </div>
      <Link to="/" className="forgot-password__return-arrow">
        <img src={left_arrow} alt="back"/>
      </Link>

      <div className="forgot-password__title">
        Forgot password?
      </div>

      <form className="forgot-password__form" onSubmit={(e) => props.onSubmitForgotForm(e)}>
        <input
          type="text"
          placeholder="Enter your email"
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
        <button>
          Send Me Instructions
        </button>
      </form>
    </div>
  );
}

export default ForgotPassword;
