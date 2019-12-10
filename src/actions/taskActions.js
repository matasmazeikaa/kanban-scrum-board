import { CONSTANTS } from '../actions';

export const addTask = (columnId, title) => {
    return {
        type: CONSTANTS.ADD_TASK,
        payload: {columnId, title}
    }
}

export const editTask = (taskId, columnId, title, description) => {
    return {
        type: CONSTANTS.EDIT_TASK,
        payload: {taskId, columnId, title, description}
    }
}

export const deleteTask = (taskId, columnId) => {
    return {
        type: CONSTANTS.DELETE_TASK,
        payload: {taskId, columnId}
    }

}