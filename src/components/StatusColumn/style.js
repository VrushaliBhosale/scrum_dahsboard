import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  column:{
    width: '25%',
    padding: '10px',
  },
  taskList:{
    height: '500px',
    overflowY: 'scroll',
    // '&::-webkit-scrollbar': {
    //   display: 'none'
    // }
  },
  title: {
    display: 'flex',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    padding: '0 0 8px 0',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: 14,
    letterSpacing: 0.25,
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 700
  }
}));
