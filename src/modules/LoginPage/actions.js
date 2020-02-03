const LoginPageActions = {
  getEmailInputValue: (value) => ({
    type: 'GET_EMAIL_INPUT_VALUE',
    payload: value
  }),
  getPasswordInputValue: (value) => ({
    type: 'GET_PASSWORD_INPUT_VALUE',
    payload: value
  }),
  submitLoginForm: () => ({
    type: 'SUBMIT_LOGIN_FORM'
  }),
  emailValid: () => ({
    type: 'EMAIL_VALID'
  }),
  invalidEmail: (err) => ({
    type: 'INVALID_EMAIL',
    payload: err
  }),
  emailInputTouched: () => ({
    type: 'EMAIL_INPUT_TOUCHED'
  }),
  passwordValid: () => ({
    type: 'PASSWORD_VALID'
  }),
  passwordInvalid: (err) => ({
    type: 'PASSWORD_INVALID',
    payload: err
  }),
  passwordInputTouched: () => ({
    type: 'PASSWORD_INPUT_TOUCHED'
  }),
  submitForgotForm: () => ({
    type: 'SUBMIT_FORGOT_FORM'
  }),
  emailValidatorOnBlur: value => dispatch => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(value)) {
      dispatch(LoginPageActions.emailValid())
    } else {
      dispatch(LoginPageActions.emailInputTouched());
      dispatch(LoginPageActions.invalidEmail('Oops! You entered an invalid email'));
    }
  },
  emailValidatorOnChange: value => dispatch => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    dispatch(LoginPageActions.getEmailInputValue(value));
    if (re.test(value)) {
      dispatch(LoginPageActions.emailValid());
    } else {
      dispatch(LoginPageActions.invalidEmail('Oops! You entered an invalid email'));
    }
  },
  passwordValidatorOnBlue: value => dispatch => {
    if (value.length > 7) {
      dispatch(LoginPageActions.passwordValid())
    } else {
      dispatch(LoginPageActions.passwordInputTouched());
      dispatch(LoginPageActions.passwordInvalid('Oops! Minimum password field length 8 characters'))
    }
  },
  passwordValidatorOnChange: value => dispatch => {
    dispatch(LoginPageActions.getPasswordInputValue(value));
    if (value.length > 7) {
      dispatch(LoginPageActions.passwordValid());
    } else {
      dispatch(LoginPageActions.passwordInvalid('Oops! Minimum password field length 8 characters'))
    }
  },
  onSubmitForm: e => (dispatch, getState) => {
    e.preventDefault();

    if (getState().login.email_valid && getState().login.password_valid) {
      dispatch(LoginPageActions.submitLoginForm());
    } else {
      if (!getState().login.email_valid) {
        dispatch(LoginPageActions.emailInputTouched());
        dispatch(LoginPageActions.invalidEmail('Email field is required'))
      }
      if (!getState().login.password_valid) {
        dispatch(LoginPageActions.passwordInputTouched());
        dispatch(LoginPageActions.passwordInvalid('Password field is required'))
      }
    }
  },
  onSubmitForgotForm: e => (dispatch, getState) => {
    e.preventDefault();
    if (getState().login.email_valid) {
      dispatch(LoginPageActions.submitForgotForm());
    } else {
      if (!getState().login.email_valid) {
        dispatch(LoginPageActions.emailInputTouched());
        dispatch(LoginPageActions.invalidEmail('Email field is required'))
      }
    }
  }
}

export default LoginPageActions;
