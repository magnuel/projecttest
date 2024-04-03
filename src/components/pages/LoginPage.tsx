import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import Login from '../Login';

const useStyles = makeStyles((theme: { spacing: (arg0: number) => any; }) => ({
  root: {
    height: '100vh',
    backgroundColor: '#09CCDD',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    maxWidth: 400,
    width: '100%',
  },
}));

const LoginPage: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item>
          <Paper className={classes.paper}>
            <Typography variant="h3" gutterBottom color="primary">
              Welcome
            </Typography>
            <Login />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default LoginPage;