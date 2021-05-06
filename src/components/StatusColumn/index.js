import React from 'react'
import {Droppable} from 'react-beautiful-dnd';
import Task from '../Task';
import AddIcon from '@material-ui/icons/Add';
import {useStyles} from './style';

export default function ProgressColumns({id,name,tasks}) {
  const classes = useStyles();

  return (
    <div className={classes.column}>
      <h2 className={classes.title}>
        {name}
        <AddIcon color="action" fontSize="small" />
      </h2>
      <Droppable droppableId={id}>
      {(provided)=>(
        <div ref={provided.innerRef} {...provided.droppableProps} className={classes.taskList}>{
          tasks?.map((task,index)=><Task key={task.id} index={index} task={task}/>)}
          {provided.placeholder}
        </div>
      )
      }
      </Droppable>
    </div>
  )
}
