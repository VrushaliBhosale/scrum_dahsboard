import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import BoardHomePage from './pages/Home';
import TaskDetails from './pages/TaskDetails';

export default function Routes() {
  const projectName="/dev-tracker";

  return (
    <Router>
       <Switch>
         <Route exact path="/" render={()=>{
           return <Redirect to={`${projectName}/board`} /> 
         }}/>
         <Route path={`${projectName}/board`} component={BoardHomePage}></Route>
         <Route path={`${projectName}/issue/:id`} component={TaskDetails}/>
       </Switch>
    </Router>
  )
}
