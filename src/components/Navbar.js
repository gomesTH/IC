import React from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  toolbar:{
    backgroundColor:"white",
    display:"flex",
    justifyContent:"space-between",
    
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    }
  }, 
}));
  
const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="fixed"> 
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          InCicle
        </Typography>
        <Typography variant="h6"className={classes.logoSm}>
          INCICLE
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;