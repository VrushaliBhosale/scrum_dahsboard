import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Board from "../components/mainBody/Board";
import Header from "../components/header/Header";
import { DragDropContext } from "react-beautiful-dnd";

const useStyles = makeStyles(() => ({
  main:{
    backgroundColor: '#F2F2F2'
  }
}));

export default function BoardHomePage() {
  const classes = useStyles();

  const onDragEnd = (result) => {

  }

  return (
    <div className={classes.main} onDragEnd={onDragEnd}>
      <Header/>
      <DragDropContext>
        <Board/>
      </DragDropContext>
    </div>
  );
}
