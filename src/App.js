import React from "react";
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import BoardHomePage from "./containers/BoardHomePage";

const useStyles = makeStyles(() => ({
  main:{
    backgroundColor: 'F2F2F2#'
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <BoardHomePage/>
    </div>
  );
}
