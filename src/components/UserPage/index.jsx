import React from 'react';

import './UserPage.scss';

const UserPage = (props) => {
  return (
    <div className="user-page">
      <div className="user-page__title">
        Hi, {props.userName}
      </div>
      <div className="user-page__description">
        Please choose your project.
      </div>
      <div className="user-page__projects">
        {props.userProjects.map((item, index) =>
          <div className="project" key={index}>{item}</div>
        )}
      </div>
    </div>
  );
}

export default UserPage;
