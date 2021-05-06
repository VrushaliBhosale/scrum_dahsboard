import React from 'react'
// import {useStyles} from './style';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router-dom";
import {initialTasks,projectName, intialProgressColumns} from '../../testData/data';

export const useStyles = makeStyles(() => ({
  wrapper:{
    minHeight: 'min-content',
    display: 'flex',
    flex: '1 1 0%',
    height: '100%',
    background: 'rgb(248, 249, 251)',
  },
  header:{
    display: 'flex',
    alignItems: 'center',
    height: '57px',
    flexShrink: 0,
    borderBottom: '1px solid rgb(239, 241, 244)',
    padding: '0 0 0 36px',
    maxWidth: '100vw',
  },
  descr_wrapper:{
    display: 'flex',
    flex: 'initial',
    flexDirection: 'column',
    inset: '56px 0px 0px',
    overflowY: 'overlay',
    width: '70%',
    backgroundColor: 'white'
  },
  status_wrapper:{
    width: '30%',
    backgroundColor: '#F8F9FB'
  },
  content:{
    padding: '36px 146px 36px 36px',
  },
  title:{
    padding: '0 0 36px',
    fontWeight: 'bold',
    fontSize: 16
  },
  desc:{
    borderBottom: '1px solid rgb(239, 241, 244)',
    paddingBottom: '18px'
  },
  status_list: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    margin: '0 0 16px'
  },
  list_title: {
    width: '90px'
  }
}));

export default function TaskDetails() {
  const classes = useStyles();
  const {id} = useParams();
   
  if(id){
    const task = initialTasks[id];
    return (
      <div className={classes.wrapper}>
        <div className={classes.descr_wrapper}>
          <header className={classes.header}>{`${projectName}/${task.id}`}</header>
          <section className={classes.content}>
            <div className={classes.title}>{task.name}</div>
            <div className={classes.desc}>{task.description}</div>
          </section>
        </div>
        <div className={`${classes.descr_wrapper} ${classes.status_wrapper}`}>
          <div className={classes.header}>Status header</div>
          <ul className={classes.content}>
            <li className={classes.status_list}>
              <div className={classes.list_title}>Status</div>
              <div>{intialProgressColumns.filter(colId=>colId.id===task.status)[0]?.name||''}</div>
            </li>
            <li className={classes.status_list}>
              <div className={classes.list_title}>Priority</div>
              <div>{task?.priority}</div>
            </li>
            <li className={classes.status_list}>
              <div className={classes.list_title}>Estimate</div>
              <div>{task?.estimation}</div>
            </li>
            {task?.labels?.length>0 && <li className={classes.status_list}>
              <div className={classes.list_title}>Labels</div>
              <div>
                {task.labels.map((label,index)=>{
                  return <div key={index}>{label.name}</div>
                  })
                }
              </div>
            </li>}
          </ul>
        </div>
      </div>
    )
  }
}
