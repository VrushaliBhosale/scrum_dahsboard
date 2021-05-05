import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Draggable} from 'react-beautiful-dnd';

const useStyles = makeStyles(() => ({
  task:{
    border:'1px solid gray',
    padding: '15px',
    margin: '10px 0',
    backgroundColor: 'white'
  }
}));

export default function Task({index,task}) {
  const classes = useStyles();

  return (
    <Draggable draggableId={task.id} index={index}>
      {
        (provided)=>(
          <div 
            className={classes.task} 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
            {task?.description}
          </div>
        )
      }
    </Draggable>
  )
}
