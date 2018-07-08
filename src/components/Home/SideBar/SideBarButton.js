import React from 'react';

const sideBarButton = (props) => (
  <div onClick={props.click}>
    <i className="material-icons" style={{fontSize: '30px', cursor: 'pointer'}}>menu</i>
  </div>
);

export default sideBarButton;
