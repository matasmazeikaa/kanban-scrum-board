import React, { useState } from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import { addTask, deleteColumn, renameColumn } from '../actions';
import { Container, Title, TaskList, TextArea } from './styledcomponents/columnstyled';
import { Button } from './styledcomponents/button';

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

    return (
        <Droppable droppableId={String(props.id)}>
            {(provided) => (
                <div>
                    <Container {...provided.droppableProps} ref={provided.innerRef}>
                        <Button secondary onClick={handleDeleteColumn}>Delete Column</Button>
                        {!taskTitleRenameOpen ?
                            <Title onClick={handleRenameTitleOpen}>{props.title}</Title>
                            :
                            <div>
                                <input value={taskTitleRename} onChange={(e) => setTaskTitleRename(e.target.value)} />
                                <Button onClick={handleRenameColumn}>Save Title</Button>
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
                            <Button onClick={handleAddTask}>Add Task</Button>
                        </div>
                    }
                    {!taskTitleInputOpen && <Button onClick={() => setTaskTitleInputOpen(!taskTitleInputOpen)}>Add Task</Button>}
                </div>
            )}
        </Droppable>
    )
}

const mapStateToProps = state => ({
    columns: state.columns
});

export default connect(mapStateToProps)(Column);
export { Column };