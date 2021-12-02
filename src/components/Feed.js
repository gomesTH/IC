import { Container, makeStyles, Typography, Box, Button,  } from "@material-ui/core";

import Post from "./Post";


const useStyles = makeStyles((theme) => ({
      
      container: {

        height: "100vh",
        paddingTop: theme.spacing(8),
        backgroundColor: "#0011",
        
      
        
      }, 
      text:{
        marginLeft: theme.spacing(4),
        fontSize: "30px",
        
      }, 
      button: {
        marginLeft: theme.spacing(80),
      

      },
      bt1:{
        backgroundColor: "white"
      },
      bt2:{
        
        backgroundColor: "blue"
      },
      box:{
        
      }
     
     

}));

const Feed = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
     <Box>
        <Typography variant="body3" className={classes.text}>Endomarleting</Typography>
      </Box>
      <Box className={classes.button}>
        
      <Button variant="outlined" size="small" className={classes.bt1}> Tipo \/ </Button>
      <Button variant="contained" size="small"className={classes.bt2}> Criar + </Button>
      </Box>
      
      <Typography>
        <Box className={classes.box}> - </Box>
      </Typography>
      
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Container>

  ) ;
  
};

export default Feed;