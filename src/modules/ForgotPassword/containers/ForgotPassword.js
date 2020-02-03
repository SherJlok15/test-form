import React from 'react';
import { connect } from 'react-redux';
import { ForgotPassword } from '../../../components';
import LoginPageActions from '../../LoginPage/actions';

class ForgotPasswordContainer extends React.Component {
  render () {
    return (
      <ForgotPassword
        emailValue={this.props.emailValue}
        emailErrors={this.props.emailErrors}
        email_valid={this.props.email_valid}
        emailInputTouchedBool={this.props.emailInputTouchedBool}
        emailInputOnChange={this.props.getEmailInputValue}
        emailValidatorOnBlur={this.props.emailValidatorOnBlur}
        emailValidatorOnChange={this.props.emailValidatorOnChange}
        onSubmitForgotForm={this.props.onSubmitForgotForm}
        forgotPasswordFormSubmited={this.props.forgotPasswordFormSubmited}
      />
    )
  }
}

export default connect(
  ({ login }) => login,
  LoginPageActions
)(ForgotPasswordContainer);
