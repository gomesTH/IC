
import React from 'react';
import { Grid, makeStyles, } from '@material-ui/core'; 

import Navbar from "./components/Navbar";
import Leftbar from "./components/Leftbar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";


    const useStyles = makeStyles((theme) => ({
     
     
    }));

    const App = () => {
      const classes = useStyles();
      return (
        <div>
          <Navbar />
            <Grid container>
          
              <Grid item sm={1}> xs={2}
                <Leftbar/>
              </Grid>

              <Grid item sm={8}> xs={9} 
                <Feed/>
              </Grid>

              <Grid item sm={3}> xs={1}
                <Rightbar/>
              </Grid>

            </Grid>
    
        </div>
        
        );
      };

      
      
    
  

export default App;
