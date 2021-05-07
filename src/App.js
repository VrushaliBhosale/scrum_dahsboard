import React from "react";
import "./style.css";
import { makeStyles } from '@material-ui/core/styles';
import BoardHomePage from "./pages/Home";
import Routes from "./Routes";

const useStyles = makeStyles(() => ({
  main:{
    backgroundColor: 'F2F2F2#',
    margin: 0
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Routes/>
    </div>
  );
}
