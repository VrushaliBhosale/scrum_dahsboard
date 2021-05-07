import React,{useState} from "react";
import ProgressColumns from '../StatusColumn';
import {useStyles} from './style';
import { DragDropContext } from "react-beautiful-dnd";
import {initialTasks,intialProgressColumns} from '../../testData/data';

export default function Board() {
  const classes = useStyles();
  const [allTasks,setAllTasks] = useState(initialTasks);
  const [progressColumns,setProgressColumns] = useState(intialProgressColumns);

  const onDragEnd = (result) => {
    const {destination,source,draggableId} = result;
    if(destination===null)
      return
    
    if(source.droppableId===destination.droppableId && source.index===destination.index)
      return
    
    var newTaskIds; 
    var columns = [...progressColumns];

    //if dropped at the same column
    if(source.droppableId===destination.droppableId && source.index!==destination.index){
      for(let i=0;i<progressColumns.length;i++){
        if(progressColumns[i].id===source.droppableId){
          newTaskIds=progressColumns[i].taskIds;
          newTaskIds.splice(source.index,1);
          newTaskIds.splice(destination.index,0,draggableId);
          columns[i].taskIds=newTaskIds;
          setProgressColumns(columns);
          return;
        }
      }
    }

   //if dropped in different columns
    for(let i=0;i<progressColumns.length;i++){
      if(progressColumns[i].id===source.droppableId){
        newTaskIds=progressColumns[i].taskIds;
        newTaskIds.splice(source.index,1);
        columns[i].taskIds=newTaskIds;
      }
      if(progressColumns[i].id===destination.droppableId){
        newTaskIds=progressColumns[i].taskIds;
        newTaskIds.splice(destination.index,0,draggableId);
        columns[i].taskIds=newTaskIds;
        allTasks[draggableId].status=destination.droppableId;
      }
    }
    setProgressColumns(columns);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={classes.main}>
      {
        progressColumns.map(section=>{
          const tasks= section.taskIds.map(id=>allTasks[id]);
          return <ProgressColumns key={section.id} id={section.id} name={section.name} tasks={tasks}/>
        })
      }
      </div>
    </DragDropContext>
  );
}
