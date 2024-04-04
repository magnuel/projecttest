import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, Paper, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TodoListPage from './pages/TodoListPage';

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundColor: "#f0f0f0",
    padding: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: "center",
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container justifyContent="center" className={classes.root}>
      <Grid item xs={12} md={8} lg={6}>
        <Paper className={classes.paper}>
          <Typography variant="h3" gutterBottom color="primary">
            Welcome
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis
            metus ac metus vulputate porta rhoncus at lacus. Proin dictum erat eget
            convallis lobortis. Aliquam purus arcu, pulvinar vitae massa et,
            vulputate commodo lacus. Etiam scelerisque auctor elementum. Morbi vitae
            ultricies ante. Donec in ornare erat.
          </Typography>
          <TodoListPage />
          <Button component={Link} to="/login" variant="contained" color="primary">
            Logout
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Home;
