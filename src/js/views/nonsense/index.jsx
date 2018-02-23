import React, { Component, Fragment } from 'react';
import cx from 'classnames';
import SceneWrap from '../../common/components/Utilities/SceneWrap';
import { Link } from 'react-router-dom';

require('./index.css');

class Nonsense extends Component {
  render() {
    let stuffLoaded = true;

    const { pathname } = this.props.location;

    const isActive = pathname === '/nonsense';

    const mainClasses = cx(
      'nonsense'
    );

    return (
      <SceneWrap active={isActive} customClass={'nonsense__wrap'}>
        <div className={mainClasses}>
          <Link to="/work">Work</Link>
        </div>
      </SceneWrap>
    )
  }
}

export default Nonsense;
