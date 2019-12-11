import React from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions';
import { Button } from './styledcomponents/button';

const TaskInformation = (props) => {
    let columnId = ''
    let currentTaskData = null;
    let columnTitle = '';

    props.columns.map(column => {
        column.tasks.map(task => {
            if (task.id === props.match.params.id) {
                columnId = column.id;
                currentTaskData = task;
                columnTitle = column.title;
            };
        })
    })

    const handleBackToColumnList = () => {
        props.history.goBack();
    }

    const handleTaskDelete = () => {
        props.dispatch(deleteTask(props.match.params.id, columnId))
        props.history.goBack();
    }

    return (
        <div style={{color: 'white'}}>
            <h3> Task title: {currentTaskData.title}</h3>
            <h3> Column Title: {columnTitle}</h3>
            <h3> Task description: {currentTaskData.description || '(No task description)'}</h3>
            <h3> Task last edited: {currentTaskData.lastEdited || '(Task hasn\'t been edited)'}</h3>
            <h3> Task created: {currentTaskData.taskCreationTime}</h3>
            <Button onClick={handleBackToColumnList}>To Column List</Button>
            <Button secondary onClick={handleTaskDelete}>Delete task</Button>
        </div>
    )
}

const mapStateToProps = state => ({
    columns: state.columns
});
  
export default connect(mapStateToProps)(TaskInformation);