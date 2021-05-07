import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  task:{
    margin: '10px 0',
    backgroundColor: 'white',
    boxShadow: 'none'
  },
  taskId:{
    fontSize: 12,
    color: 'gray',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 0,
    textTransform: 'uppercase' 
  },
  root: {
    minWidth: 200,
  },
  title: {
    fontStyle: 'bold',
    letterSpacing: 0.25,
    fontSize: 14,
  },
}));