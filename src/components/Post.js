import React from 'react';

import { 
         Button,
         Card,
         CardActionArea,
         CardMedia,
         CardActions,
         CardContent,
         makeStyles,
         Typography,
         Container
      
         
       } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  
  
  card: 
      {
        display: "flex",
        height: 60,
        marginTop: -18,
        marginBottom: theme.spacing(5),
        [theme.breakpoints.down("sm")]: {
          marginBottom: theme.spacing(8),
          backgroundColor: "white",
          cursor:"pointer",
          
        }, 
      },

        image: {
          marginLeft: 10,
          width: 90
        },

        media: {
          height: 25,
          width: 25,
          padding: "13px"
        },  

        text:{
          paddingTop: 2,
          padding: 1,
          flexWrap: "wrap",
          marginBottom: "25px",
          fontSize: "13px"
          
        
        }

}));



const Post = () => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      
    <Card className={classes.card}>
      
      <CardActionArea className={classes.image}>

      <CardMedia className={classes.media}
        image="https://cdn.pixabay.com/photo/2017/01/08/13/58/cube-1963036__340.jpg"
        alt="Card1"
        />
    
      </CardActionArea>
      
      <CardActionArea>
        
        <CardContent className={classes.text}>

          <Typography variant="h6">Geral dispensado para curtir o feriado</Typography>

          <Typography variant="body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incidindut...   
                    </Typography>

        </CardContent>
      
      </CardActionArea>

      <CardActions>
          <Button size="small" color="black"> share </Button>
      </CardActions>

    </Card>
    </Container>
    
  );
};

export default Post;