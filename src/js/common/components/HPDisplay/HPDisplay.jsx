import React, { Component } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import SceneWrap from '../Utilities/SceneWrap';


import './HPDisplay.css';
// import image from './a_walrus_blessing.jpg';

class HPDisplay extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      stuffLoaded: false
    };
  }

  componentDidMount() {
    console.log('cdm');
    this.handleChange();
  }

  componentDidUpdate() {
    // console.log('cdu');
    // this.handleChange();
  }
  handleChange(){
      let that = this;
      if(!that.state.stuffLoaded) {
        setTimeout(() => {
          that.setState({
            stuffLoaded: true
          })
        }, 1000);
      } else {
        that.setState({
          stuffLoaded: false
        })
      }
  }

  render() {
    const {
      stuffLoaded
    } = this.state;

    const { pathname } = this.props.location;

    const isHome = pathname === '/';
    //const isJustAnotherPage = pathname === '/page';

    const mainClasses = cx(
      'hp',
      {'hp--loaded': stuffLoaded}
    );

    return (
      <SceneWrap
        active={isHome}
        customClass={'hp__wrap'}
        hideHomeLink={true}>
        <div className={mainClasses}>
          <img src={require('./a_walrus_blessing.jpg')} />
          <h2>Ben Chapman</h2>
          <h3>websites</h3>
          <div className="hp__line"></div>
          <Link to="/nonsense">Assorted Nonsense</Link>
          <Link to="/work">Work Info</Link>
        </div>
      </SceneWrap>


    );
  }
}

export default HPDisplay;
