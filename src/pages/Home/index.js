import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Board from "../../components/TaskBoard";
import Header from "../../components/Header";

const useStyles = makeStyles(() => ({
  main:{
    backgroundColor: '#F2F2F2',
    display: 'flex',
    flexFlow: 'column',
    height: '100%'
  }
}));

export default function BoardHomePage() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Header/>
      <Board/>
    </div>
  );
}
