import { actionTypes } from 'features/core/actionTypes';

const initialState = {
  taskList: [],
  createTask: {
    title: "",
    description: "",
    id: ""
  },
  showTask: false,
  selectedTask: {
    title: "",
    description: "",
    id: ""
  }
};

export const task = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_INPUT:
      state = {
        ...state,
        createTask: {
          ...state.createTask,
          [action.payload.id]: action.payload.value,
        }
      };
      break;

    case actionTypes.EDIT_UPDATE_INPUT:
      state = {
        ...state,
        selectedTask: {
          ...state.selectedTask,
          [action.payload.id]: action.payload.value,
        }
      };
      break;

    case actionTypes.CREATE_TASK:
      const { title, description, id } = action.payload;
      state = {
        ...state,
        taskList: [...state.taskList, { title, description, id }],
        createTask: { ...initialState.createTask }
      };
      break;

    case actionTypes.DELETE_TASK:
      const newList = [...state.taskList].filter(task => task.id !== action.payload);
      state = {
        ...state,
        taskList: newList
      };
      break;

    case actionTypes.EDIT_TASK:
      state = {
        ...state,
        selectedTask: { ...action.payload },
        showTask: true
      };
      break;

    case actionTypes.CANCEL_EDIT_TASK:
      state = {
        ...state,
        selectedTask: { ...initialState.selectedTask },
        showTask: false
      };
      break;
      case actionTypes.SAVE_EDITED_TASK:
        const newEditedList = [...state.taskList].map(task => {
          if(task.id === state.selectedTask.id) {
            return state.selectedTask;
          }
          else return task;
        });
        state = {
          ...state,
          taskList: newEditedList,
          selectedTask: {...initialState.selectedTask}
        }
    default:
      return state;
  }
  return state;
};
