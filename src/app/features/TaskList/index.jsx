import React, { Fragment } from "react";
import { connect } from "react-redux";
import { deleteTask, editTask } from "features/core/actions";
import "features/TaskList/styles";

class TaskListPage extends React.PureComponent {
  deleteTask = id => () => {
    this.props.deleteTask(id)
  }
  editTask = details => () => {
    this.props.editTask(details);
  }
  render() {
    const { selectedTask } = this.props.task;
    return (
      <Fragment>
        {
          this.props.task.taskList.length > 0 ? this.props.task.taskList.map(item => <div
            className="border border-dark rounded block my-2 px-2" key={item.id}>
            <div className="row">
              <div className="col-10">
                <strong>{item.title}</strong><br />
                <span>{item.description}</span>
              </div>
              <div>
                <button
                  title="Click here to edit"
                  onClick={this.editTask(item)}
                  className="btn btn-sm text-info"
                >Edit</button>
                {selectedTask.id !== item.id &&
                  <button
                    onClick={this.deleteTask(item.id)}
                    className="btn btn-sm text-danger"
                  >X</button>
                }
              </div>
            </div>
          </div>)
            :
            <h3 className="text-center text-secondary mt-5 ">No items found</h3>
        }
      </Fragment>
    );
  }
}

export const TaskList = connect(
  state => ({
    task: state.task
  }),
  {
    deleteTask,
    editTask
  }
)(TaskListPage);