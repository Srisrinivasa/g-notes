import { action } from 'root/actions';
import { actionTypes } from '../actionTypes';

export const handleChange = details => action(actionTypes.UPDATE_INPUT, details);
export const createTask = details => action(actionTypes.CREATE_TASK, details);
export const deleteTask = id => action(actionTypes.DELETE_TASK, id);
export const editTask = details => action(actionTypes.EDIT_TASK, details);

export const editHandleChange = details => action(actionTypes.EDIT_UPDATE_INPUT, details);
export const saveEditedDetails = () => action(actionTypes.SAVE_EDITED_TASK);
export const handleCancel = () => action(actionTypes.CANCEL_EDIT_TASK);