import React, { Fragment } from 'react';
import { Routes } from 'routes';
import { TaskList } from "features/TaskList";
import "features/core/styles/App";

export class App extends React.PureComponent {
  render() {
    return (
      <Fragment>
        <h1 className='header mb-0'>G Notes</h1>
        <div className='row mx-0'>
        <div className='col-md-4 px-2'>
            <TaskList />
          </div>
          <div className='col-md-8'>
            <Routes />
          </div>
        </div>
      </Fragment>
    );
  }
}
