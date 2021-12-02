import { Container, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
 container: {
  backgroundColor: "#0011",
 },
 

}));

const Leftbar = () => {
  const classes = useStyles();
  return ( 
    <Container className={classes.container}>
    
    </Container> 
  );
};

export default Leftbar;