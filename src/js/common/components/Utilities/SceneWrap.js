import React, { Component } from 'react';
import cx from 'classnames';
import HomeLink from '../HomeLink/HomeLink';

class SceneWrap extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   active: this.props.active,
    // };
  }
  // componentWillUpdate(nextProps) {
  //   if(nextProps !== this.props) {
  //     this.setState({
  //       active =
  //     })
  //   }
  // }
  render() {
    const {
      active,
      customClass,
      hideHomeLink
    } = this.props;



    const wrapClasses = cx(
      'scene-wrap',
      {'scene-wrap--move-off': !active},
      customClass
    );

    return (
      <div className={wrapClasses}>
        {!hideHomeLink &&
          <HomeLink/>
        }
        {this.props.children}
      </div>
    );
  }
}

export default SceneWrap;