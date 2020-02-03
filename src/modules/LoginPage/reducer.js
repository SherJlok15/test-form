const initialState = {
  userName: '',
  emailValue: '',
  emailErrors: '',
  emailInputTouchedBool: false,
  email_valid: false,
  passwordValue: '',
  passwordErrors: '',
  passwordInputTouchedBool: false,
  password_valid: false,
  logged_in: false,
  forgotPasswordFormSubmited: false,
  userProjects: ['Flirchi', 'io', 'company name', 'facenews.com', 'form test', 'avocove', 'coinmarketcap', 'freelance']
}

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_EMAIL_INPUT_VALUE':
      return {
        ...state,
        emailValue: payload
      }
    case 'GET_PASSWORD_INPUT_VALUE':
      return {
        ...state,
        passwordValue: payload
      }
    case 'EMAIL_VALID':
      return {
        ...state,
        email_valid: true,
        emailErrors: ''
      }
    case 'INVALID_EMAIL':
      return {
        ...state,
        email_valid: false,
        emailErrors: payload
      }
    case 'EMAIL_INPUT_TOUCHED':
      return {
        ...state,
        emailInputTouchedBool: true
      }
    case 'PASSWORD_VALID':
      return {
        ...state,
        password_valid: true,
        passwordErrors: ''
      }
    case 'PASSWORD_INVALID':
      return {
        ...state,
        password_valid: false,
        passwordErrors: payload
      }
    case 'PASSWORD_INPUT_TOUCHED':
      return {
        ...state,
        passwordInputTouchedBool: true
      }
    case 'SUBMIT_LOGIN_FORM':
      return {
        ...state,
        userName: state.emailValue.split('@')[0],
        logged_in: true,
        emailValue: '',
        emailInputTouchedBool: false,
        email_valid: false,
        passwordValue: '',
        passwordInputTouchedBool: false,
        password_valid: false,
      }
    case 'SUBMIT_FORGOT_FORM':
      return {
        ...state,
        emailValue: '',
        emailInputTouchedBool: false,
        email_valid: false,
        passwordValue: '',
        passwordInputTouchedBool: false,
        password_valid: false,
        forgotPasswordFormSubmited: true
      }
    default:
      return state
  }
}
