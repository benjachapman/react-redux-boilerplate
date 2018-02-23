import React, { Fragment } from 'react';
import {
  Route,
  withRouter,
} from 'react-router-dom';
import { HPDisplay } from './common/components/HPDisplay';
import WorkInfo from './views/workInfo';

import Nonsense from './views/nonsense';

import '../style/index.css';

const HPDisplayWithRouter = withRouter(props => <HPDisplay {...props} />);
const WorkInfoWithRouter = withRouter(props => <WorkInfo {...props} />);
const NonsenseWithRouter = withRouter(props => <Nonsense {...props} />);

module.exports = (
  <Fragment>
    <HPDisplayWithRouter />
    <WorkInfoWithRouter />
    <NonsenseWithRouter />
  </Fragment>
);
