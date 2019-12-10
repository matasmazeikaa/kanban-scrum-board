import { CONSTANTS } from '../actions';
import uuid from 'uuid';

const initialState = JSON.parse(localStorage.getItem('columns')) || [];

const columnListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTANTS.ADD_COLUMN: {
            const newColumn = {
                title: action.payload,
                id: uuid(),
                tasks: []
            }
            const newState = [...state, newColumn]
            localStorage.setItem('columns', JSON.stringify(newState));
            return newState
        }

        case CONSTANTS.DELETE_COLUMN: {
            const newState = state.filter(column => column.id !== action.payload);
            localStorage.setItem('columns', JSON.stringify(newState))
            return newState;
        }

        case CONSTANTS.RENAME_COLUMN: {
            const newState = [...state];
            Object.assign(newState.find(column => column.id === action.payload.columnId), { title: action.payload.title })
            localStorage.setItem('columns', JSON.stringify(newState))
            return newState;
        }

        case CONSTANTS.ADD_TASK: {
            const newTask = {
                title: action.payload.title,
                taskCreationTime: Date(),
                id: uuid(),
            }

            const newState = state.map(column => {
                if (column.id === action.payload.columnId) {
                    return {
                        ...column,
                        tasks: [...column.tasks, newTask]
                    };
                } else {
                    return column
                }
            })
            localStorage.setItem('columns', JSON.stringify(newState));
            return newState
        }

        case CONSTANTS.DELETE_TASK: {
            const newState = [...state]
            const columnIndex = newState.findIndex(column => column.id === action.payload.columnId)
            const tasksIndex = newState[columnIndex].tasks.findIndex(task => task.id === action.payload.taskId)
            newState[columnIndex].tasks.splice(tasksIndex, 1)
            localStorage.setItem('columns', JSON.stringify(newState));
            return newState;

        }

        case CONSTANTS.EDIT_TASK: {
            const newState = [...state];
            Object.assign(
                newState.find(column => column.id === action.payload.columnId)
                    .tasks.find(task => task.id === action.payload.taskId),
                { title: action.payload.title, description: action.payload.description, lastEdited: Date() }
            );
            localStorage.setItem('columns', JSON.stringify(newState));
            return newState;
        }

        case CONSTANTS.DRAG_END:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexEnd,
                droppableIndexStart,
                draggableId
            } = action.payload

            const newState = [...state];
            if (droppableIdStart === droppableIdEnd) {
                const column = state.find(column => droppableIdStart === String(column.id));
                const task = column.tasks.splice(droppableIndexStart, 1);
                column.tasks.splice(droppableIndexEnd, 0, ...task);
            }

            if (droppableIdStart !== droppableIdEnd) {
                const start = state.find(column => droppableIdStart === String(column.id));
                const task = start.tasks.splice(droppableIndexStart, 1);
                const end = state.find(column => droppableIdEnd === String(column.id));
                end.tasks.splice(droppableIndexEnd, 0, ...task);
            }
            localStorage.setItem('columns', JSON.stringify(newState));
            return newState;


        default:
            return state;
    }
}

export default columnListReducer;