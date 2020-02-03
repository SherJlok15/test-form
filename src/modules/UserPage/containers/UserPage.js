import React from 'react';
import { connect } from 'react-redux';
import { UserPage } from '../../../components';

class UserPageContainer extends React.Component {
  render () {
    return (
      <UserPage userProjects={this.props.userProjects} userName={this.props.userName}/>
    );
  }
}

export default connect(
  ({ login }) => login, {})
  (UserPageContainer);
