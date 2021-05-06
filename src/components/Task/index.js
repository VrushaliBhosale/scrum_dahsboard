import React from 'react'
import {Draggable} from 'react-beautiful-dnd';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import {useStyles} from './style';
import { useHistory } from "react-router-dom";

export default function Task({index,task}) {
  const classes = useStyles();
  let history = useHistory();

  return (
    <Draggable draggableId={task.id} index={index}>
      {
        (provided)=>(
           <Card className={classes.task} 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onClick={()=>history.push(`/dev-tracker/issue/${task.id}`)}
           >
            <CardContent>
              <Typography className={classes.taskId} color="textSecondary" gutterBottom>
                {task.id}
                <AccountCircleOutlinedIcon color="disabled" fontSize="small"/>
              </Typography>
              <Typography className={classes.title}>
                {task.name}
              </Typography>
            </CardContent>
          </Card>
        )
      }
    </Draggable>
  )
}
