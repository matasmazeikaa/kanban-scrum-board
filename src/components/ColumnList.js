import React, { useState } from 'react';
import Column from './Column';
import { addColumn, sortTask, deleteColumn } from '../actions';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import { Container, TextArea } from './styledcomponents/columnliststyled';
import { Button } from './styledcomponents/button';

const ColumnList = (props) => {
  const [columnTitleInput, setColumnTitleInput] = useState('');
  const [columnTitleFormOpen, setColumnTitleFormOpen] = useState(false);

  const handleAddColumn = () => {
    setColumnTitleFormOpen(false);

    if (columnTitleInput) {
      props.dispatch(addColumn(columnTitleInput))
    }

    return;
  }

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    props.dispatch(sortTask(
      source.droppableId,
      destination.droppableId,
      source.index,
      destination.index,
      draggableId
    ))

  }

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Container>
          {props.columns.map(column => <Column key={column.id} title={column.title} tasks={column.tasks} id={column.id} />)}
          {columnTitleFormOpen &&
            <div style={{margin: '8px'}}>
              <TextArea onChange={(e) => setColumnTitleInput(e.target.value)} />
              <Button onClick={handleAddColumn}>Add Column</Button>
            </div>
          }
          {!columnTitleFormOpen && <Button addcolumn onClick={() => { setColumnTitleFormOpen(!columnTitleFormOpen)}} id='add-column-btn'>Add Column</Button>}
        </Container>
      </DragDropContext>
    </div>
  );
}

const mapStateToProps = state => ({
  columns: state.columns
});

export default connect(mapStateToProps)(ColumnList);
export { ColumnList };