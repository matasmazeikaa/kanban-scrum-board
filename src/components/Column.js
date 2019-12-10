import React, { useState } from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { addTask, deleteColumn, renameColumn } from '../actions';
import { Container, Title, TaskList, TextArea } from './styledcomponents/columnstyled';

const Column = (props) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskTitleRename, setTaskTitleRename] = useState(props.title);
    const [taskTitleInputOpen, setTaskTitleInputOpen] = useState(false);
    const [taskTitleRenameOpen, setTaskTitleRenameOpen] = useState(false);

    const handleAddTask = () => {
        setTaskTitleInputOpen(false);
        if (taskTitle) {
            props.dispatch(addTask(props.id, taskTitle))
        }
        return;
    }

    const handleDeleteColumn = () => {
        props.dispatch(deleteColumn(props.id))
    }

    const handleRenameColumn = () => {
        handleRenameTitleOpen();
        if (taskTitleRename) {
            props.dispatch(renameColumn(props.id, taskTitleRename))
        }
        setTaskTitleRename(props.title)
        return;
    }

    const handleRenameTitleOpen = () => {
        setTaskTitleRenameOpen(!taskTitleRenameOpen)
    }
    console.log(props)
    return (
        <Droppable droppableId={String(props.id)}>
            {(provided) => (
                <div>
                    <Container {...provided.droppableProps} ref={provided.innerRef}>
                        <button onClick={handleDeleteColumn} type="button" className="btn btn-danger" style={{ width: '45%', margin: '8px' }}>Delete Column</button>
                        {!taskTitleRenameOpen ?
                            <Title onClick={handleRenameTitleOpen}>{props.title}</Title>
                            :
                            <div>
                                <input value={taskTitleRename} onChange={(e) => setTaskTitleRename(e.target.value)} />
                                <button onClick={handleRenameColumn}>Save Title</button>
                            </div>
                        }
                        <TaskList>
                            {props.tasks.map((task, index) => <Task
                                key={task.id}
                                title={task.title}
                                id={task.id}
                                index={index}
                                columnId={props.id}
                                columnTitle={props.title}
                                description={task.description}
                                lastEdited={task.lastEdited}
                                creationDate={task.taskCreationTime}
                            />
                            )}
                        </TaskList>
                        {provided.placeholder}
                    </Container>
                    {taskTitleInputOpen &&
                        <div>
                            <TextArea onChange={(e) => setTaskTitle(e.target.value)} placeholder="Enter task title..." />
                            <button onClick={handleAddTask} type="button" className="btn btn-success" style={{ width: '40%' }}>Add Task</button>
                        </div>
                    }
                    {!taskTitleInputOpen && <button onClick={() => setTaskTitleInputOpen(!taskTitleInputOpen)} type="button" className="btn btn-success" style={{ width: '40%', margin: '8px' }}>Add Task</button>}
                </div>
            )}
        </Droppable>
    )
}

const mapStateToProps = state => ({
    columns: state.columns
});

export default connect(mapStateToProps)(Column);