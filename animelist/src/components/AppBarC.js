import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: theme.spacing(5)
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppBarC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
            ANIME CONOSSIEUR
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Anime</Button>
          <Button color="inherit">Manga</Button>
          <Button color="inherit">About</Button>

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarC;