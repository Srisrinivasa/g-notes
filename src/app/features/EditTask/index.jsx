import React, { Fragment } from "react";
import { connect } from "react-redux";
import { editHandleChange, saveEditedDetails, handleCancel } from "features/core/actions";

class EditTaskPage extends React.PureComponent {
  editHandleChange = e => {
    const { id, value } = e.target;
    this.props.editHandleChange({ id, value });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.saveEditedDetails();
  }
  handleCancel = () => {
    this.props.handleCancel();
  }
  render() {
    const { selectedTask: { title, description } } = this.props.task;
    return (
      <Fragment>
        <h1>Edit Notes</h1>
        <form className="container-fluid mt-4" onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            className="form-control"
            required
            minLength={5}
            id="title"
            value={title}
            onChange={this.editHandleChange}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            rows={10}
            className="form-control"
            required
            placeholder="Enter description here"
            id="description"
            value={description}
            onChange={this.editHandleChange}
          />
          <div className="row mt-3">
            <button
              type="submit"
              className="btn btn-sm btn-primary offset-7 mr-2 col-2">
              Save</button>

            <button
              onClick={this.handleCancel}
              className="btn btn-sm btn-secondary col-2">
              cancel</button>
          </div>
        </form>
      </Fragment>
    );
  }
}
export const EditTask = connect(
  state => ({
    task: state.task
  }),
  {
    editHandleChange,
    saveEditedDetails,
    handleCancel
  }
)(EditTaskPage);
