import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {Droppable} from 'react-beautiful-dnd';
import Task from '../task/Task';

const useStyles = makeStyles(() => ({
  column:{
    border:'1px solid black',
    height: '400px',
    width: '30%',
    padding: '10px'
  }
}));

export default function ProgressColumns({id,name,tasks}) {
  const classes = useStyles();

  return (
    <div className={classes.column}>
      <h2 className={classes.title}>{name}</h2>
      <Droppable droppableId={id}>
      {(provided)=>(
        <div ref={provided.innerRef} {...provided.droppableProps}>{
          tasks?.map((task,index)=><Task key={index} index={index} task={task}/>)}
          {provided.placeholder}
        </div>
      )
      }
      </Droppable>
    </div>
  )
}
