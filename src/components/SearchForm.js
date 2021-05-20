import React, { useRef, useEffect } from 'react';
import { useGlobalContext } from '../context';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
   searchForm: {
      margin: '40px 0',
   } 
})

const SearchForm = () => {

   const classes = useStyles();
   const { setSearch, search } = useGlobalContext();

   const handleSubmit = (e) => {
      e.preventDefault();
   }

   return ( 
      <React.Fragment>
         <form className={classes.searchForm} onSubmit={() => handleSubmit()}>
            <TextField 
               id="search-form" 
               label="Search Cocktails" 
               value={search}
               variant="outlined" 
               onChange={(e) => setSearch(e.target.value)}>
            </TextField>
         </form>
      </React.Fragment>
    );
}
 
export default SearchForm;