import React, { Fragment } from "react";
import { connect } from "react-redux";
import { handleChange, createTask } from "features/core/actions";
import { EditTask } from "features/EditTask";
class HomePage extends React.PureComponent {
  handleChange = e => {
    const { id, value } = e.target;
    this.props.handleChange({ id, value });
  }
  handleSubmit = e => {
    e.preventDefault();
    const { title, description } = this.props.task.createTask;
    const id = Date.now();
    this.props.createTask({ title, description, id })
  }
  render() {
    const { createTask: { title, description }, showTask } = this.props.task;
    return (
      showTask ? <div>
        < EditTask />
      </div >
        :
        <Fragment>
          <h1>Add Notes</h1>
          <form className="container-fluid mt-4" onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              className="form-control"
              required
              minLength={5}
              id="title"
              value={title}
              onChange={this.handleChange}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              rows={10}
              className="form-control"
              required
              placeholder="Enter description here"
              id="description"
              value={description}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              className="btn btn-sm btn-primary mt-3 offset-10 col-2">
              Save</button>
          </form>
        </Fragment>
    );
  }
}
export const Home = connect(
  state => ({
    task: state.task
  }),
  {
    handleChange,
    createTask
  }
)(HomePage);
