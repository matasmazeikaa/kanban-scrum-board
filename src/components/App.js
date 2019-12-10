import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import ColumnList from './ColumnList';
import { connect } from 'react-redux';
import TaskInformation from './TaskInformation';

const App = (props) => {

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={ColumnList}/>
        <Route exact path='/:id' render={(props) => {
          return <TaskInformation {...props} />
        }} />
      </Switch>
    </Router>

  );
}

const mapStateToProps = state => ({
  columns: state.columns
});

export default connect(mapStateToProps)(App);
