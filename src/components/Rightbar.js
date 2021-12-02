import React  from 'react';
import {  Card,
          CardActionArea,
          CardMedia,
          CardContent,
          makeStyles,
          Typography,
          Button,
          Container,
          Box,
          Divider
                } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  
  right:{
    marginTop: theme.spacing(5), 
    backgroundColor: "#0011",   
  },
  card1: {
    height: 300,
    maxWidth: theme.spacing(100), 
    border: "2px solid #0011",
    backgroundColor: "#fc9"      
  },

  button: {
    padding: 5  ,
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(2)
  },
  card2: {
    height: 300,
    maxWidth: theme.spacing(50),
    marginTop: theme.spacing(1),
    border: "2px solid #0012",
    alignItems: "center",
    backgroundColor: "white"
    
    
   
  }, 
  media:{ 
   padding: "50px",
   marginTop: theme.spacing(1),
   marginLeft: theme.spacing(10),
   marginRight: theme.spacing(10),
   

  },
 
  box:{
    alignItems: "center"
  },
  divider:{
    padding: 8,
    backgroundColor: "#fc9"

  }
 

}));

const Rightbar = () => {
  const classes = useStyles();
  return (
  <Container className={classes.right}>
    
    
      <CardActionArea className={classes.card1}>
  
        <Box p={2}>
          <Typography variant="body1">Endomarketing</Typography>
          <Typography variant="body3">Endomarketin está relacionado ás ações de trainamento ou qualificação dos colaboradores da empresa. visando um melhor serviço para o cliente. Marketing interno, devido ao nome, é usualmente confundido com Endomarketing mesmo sendo conceitos diferentes.</Typography>
        </Box>

        <Divider className={classes.divider}/>
        <Box>
              <Button variant="outlined"  className={classes.button}>Dispensar</Button>
       </Box>
      </CardActionArea>


        <CardActionArea className={classes.card2}>
        
          <Box  >
            <CardMedia
                className={classes.media}
                image="https://avatars.githubusercontent.com/u/10067450?s=120&v=4"
                title="Card1"
              />
               </Box>
               
          <Box  >
            <CardMedia
                className={classes.media}
                image="https://avatars.githubusercontent.com/u/10067450?s=120&v=4"
                title="Card1"
              />
               </Box>
          
          
         
         
        </CardActionArea>
        
      
      
    
  </Container>

  );
};

export default Rightbar;