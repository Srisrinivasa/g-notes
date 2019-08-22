import { combineReducers } from 'redux';
import { task } from 'features/core/reducers';

export const rootReducer = combineReducers({
  task,
});
