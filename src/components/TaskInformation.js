import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions';

const TaskInformation = (props) => {
    const data = props.location.state;
    const handleBackToColumnList = () => {
        props.history.goBack();
    }

    const handleTaskDelete = () => {
        props.dispatch(deleteTask(props.match.params.id, data.columnId))
        props.history.goBack();
    }

    return (
        <div style={{color: 'white'}}>
            <h3> Task title: {data.title}</h3>
            <h3> Column Title: {data.columnTitle}</h3>
            <h3> Task description: {data.description || '(No task description)'}</h3>
            <h3> Task last edited: {data.lastEdited || '(Task hasn\'t been edited)'}</h3>
            <h3> Task created: {data.taskCreation}</h3>
            <button onClick={handleBackToColumnList} type="button" class="btn btn-primary">To Column List</button>
            <button onClick={handleTaskDelete}type="button" class="btn btn-danger">Delete task</button>
        </div>
    )
}

export default connect()(TaskInformation);