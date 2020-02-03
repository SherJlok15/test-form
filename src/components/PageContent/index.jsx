import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage, ForgotPassword, UserPage } from '../../modules';

const PageContent = (props) => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={props.logged_in ? UserPage : LoginPage}/>
        <Route path="/forgot-password" component={ForgotPassword}/>
      </Switch>
      <div className="pageConten-bg"></div>
    </>
  );
}

export default PageContent;
