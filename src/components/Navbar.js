import { CssBaseline, AppBar, Toolbar, Typography, Link, Button  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
   appBar: { 
      padding: '.5rem 0',
      marginBottom: '50px',
   },
   title: {
      fontSize: '2rem',
      display: 'flex',
      justifyContent: 'space-between',
      flexGrow: 1,
   }
})

const Navbar = () => {

   const classes = useStyles();
   const history = useHistory();

   return ( 
      <div className="navbar">
         <AppBar className={classes.appBar} position="static">
            <Toolbar>
               <Button className={classes.title} onClick={() => history.push('/')}>
                  <Typography  variant="h3">Richard's Cocktail Database</Typography>
               </Button>
               
               <Button color="inherit" onClick={() => history.push('/')}>Home</Button>
               <Button color="inherit" onClick={() => history.push('/about')}>About</Button>

            </Toolbar>
         </AppBar>

      </div>

    );
}
 
export default Navbar;