import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ProgressColumns from '../progressColumns/ProgressColumns';
import {allTasks,progressColumns} from '../../testData/data';

const useStyles = makeStyles(() => ({
  main:{
    display: 'flex',
    justifyContent: 'space-between',
    margin: '30px 10px 0 10px'
  }
}));

export default function Board() {
  const classes = useStyles();
  
  return (
    <div className={classes.main}>
     {
       progressColumns.map(section=>{
         const tasks= section.taskIds.map(id=>allTasks[id]);
        return <ProgressColumns key={section.id} id={section.id} name={section.name} tasks={tasks}/>
       })
     }
    </div>
  )
}
