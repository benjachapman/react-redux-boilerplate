import React, { Component, Fragment } from 'react';
import cx from 'classnames';
import SceneWrap from '../../common/components/Utilities/SceneWrap';
import { Link } from 'react-router-dom';

//import {  } from '../../common/components/HPDisplay';

require('./index.css');

class WorkInfo extends Component {
  render() {
    let stuffLoaded = true;

    const { pathname } = this.props.location;

    const isActive = pathname === '/work';

    const mainClasses = cx(
      'work-info'
    );

    return (
      <SceneWrap active={isActive} customClass={'work-info__wrap'}>
        <div className={mainClasses}>
          <Link to="/nonsense">Assorted Nonsense</Link>
        </div>
      </SceneWrap>
    )
  }
}

export default WorkInfo;
