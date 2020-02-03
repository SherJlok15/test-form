import React from 'react';
import { connect } from 'react-redux';
import { PageContent } from '../../../components';

class PageContentContainer extends React.Component {
  render () {
    return (
      <>
        <PageContent logged_in={this.props.logged_in}/>
        
      </>
    )
  }
}

export default connect(({ login }) => login, {})(PageContentContainer)
