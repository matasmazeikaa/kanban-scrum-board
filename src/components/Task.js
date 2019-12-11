import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { editTask, deleteTask } from '../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Container, Modal, ModalContent, Close, TextArea} from './styledcomponents/taskstyled';
import { Button } from './styledcomponents/button';

const Task = (props) => {
    const taskInfoTo = {
        pathname: `/${props.id}`,
        state: {
            title: props.title,
            description: props.description,
            columnTitle: props.columnTitle,
            lastEdited: props.lastEdited,
            taskCreation: props.creationDate,
            columnId: props.columnId
        }
    }

    const [modalOpen, setModalOpen] = useState(false);
    const [taskTitleRename, setTaskTitleRename] = useState(props.title);
    const [taskDescription, setTaskDescription] = useState(props.description || '');

    const handleTaskEdit = () => {
        setModalOpen(false)
        if (taskTitleRename) {
            props.dispatch(editTask(props.id, props.columnId, taskTitleRename, taskDescription))
        }
        
    }

    const handleTaskDeletion = () => {
        setModalOpen(false)
        props.dispatch(deleteTask(props.id, props.columnId))
    }

    return (
        <div>
            <Draggable draggableId={String(props.id)} index={props.index}>
                {(provided) => (
                    <Container ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onClick={() => setModalOpen(!modalOpen)} >
                        {props.title}
                    </Container>
                )}
            </Draggable>
            {modalOpen &&
                <Modal>
                    <ModalContent >
                        <Close onClick={() => { setModalOpen(!modalOpen) }} >&times;</Close>
                        <label>Task title:</label>
                        <input value={taskTitleRename} onChange={(e) => setTaskTitleRename(e.target.value)}/>
                        <label>Task description:</label>
                        <TextArea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}/>
                        <Button onClick={handleTaskEdit} style={{marginTop: '8px', marginBottom: '8px'}}>Save Changes</Button>
                        <Button secondary onClick={handleTaskDeletion}>Delete task</Button>
                        <Link to={taskInfoTo}>Task information page</Link>
                    </ModalContent>
                </Modal>
            }
        </div>
    )
}

const mapStateToProps = state => ({
    columns: state.columns
  });

export default connect(mapStateToProps)(Task);