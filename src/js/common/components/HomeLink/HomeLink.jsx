import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import './HomeLink.css';

class HomeLink extends PureComponent {
  render() {
    return (
      <div className="homeLink">
        <div className="homeLink__triangle"/>
        <Link to="/"><img src={require('./walrus-ico.png')} /></Link>
      </div>
    );
  }
}

export default HomeLink;
