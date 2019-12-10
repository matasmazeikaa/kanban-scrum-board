import { CONSTANTS } from '.';

export const addColumn = (title) => {
    return {
        type: CONSTANTS.ADD_COLUMN,
        payload: title
    }
}

export const deleteColumn = (columnId) => {
    return {
        type: CONSTANTS.DELETE_COLUMN,
        payload: columnId
    }
}

export const renameColumn = (columnId, title) => {
    return {
        type: CONSTANTS.RENAME_COLUMN,
        payload: {columnId, title}
    }
}

export const sortTask = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId) => {
    return {
        type: CONSTANTS.DRAG_END,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }
    }
}
