import React from 'react';
import { connect } from 'react-redux';
import { LoginPage } from '../../../components';
import LoginPageActions from '../actions';

class LoginPageContainer extends React.Component {
  render () {
    return (
      <LoginPage
        emailValue={this.props.emailValue}
        emailErrors={this.props.emailErrors}
        email_valid={this.props.email_valid}
        emailInputTouchedBool={this.props.emailInputTouchedBool}
        emailInputOnChange={this.props.getEmailInputValue}
        emailValidatorOnBlur={this.props.emailValidatorOnBlur}
        emailValidatorOnChange={this.props.emailValidatorOnChange}
        passwordValue={this.props.passwordValue}
        passwordErrors={this.props.passwordErrors}
        password_valid={this.props.password_valid}
        passwordInputTouchedBool={this.props.passwordInputTouchedBool}
        passwordInputOnChange={this.props.getPasswordInputValue}
        passwordValidatorOnBlue={this.props.passwordValidatorOnBlue}
        passwordValidatorOnChange={this.props.passwordValidatorOnChange}
        onSubmitForm={this.props.onSubmitForm}
      />
    )
  }
}


export default connect(
  ({ login }) => login,
  LoginPageActions,
)(LoginPageContainer);
