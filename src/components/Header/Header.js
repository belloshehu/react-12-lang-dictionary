import React from 'react';
import {Grid, TextField, ThemeProvider, createTheme} from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import './Header.css';
import languages from '../../data/languages';

const Header = ({language, setLanguage, word, setWord, themeColor}) => {
    const handleLangugeChange = (e) =>{
        setLanguage(e.target.value);
        setWord("");
    }
    const darkTheme = createTheme({

        palette:{
            primary: {
                main: themeColor==="dark"? '#000': '#fff',
            },
         type: themeColor==="dark"?'dark':'light'
        }
    });
    return (
        <div className='header'>
            <span className='title'>12-lang dictionary</span>
            <Grid container spacing={0}>
                <ThemeProvider theme={darkTheme}>
                    <Grid item xs={6}>
                        <TextField 
                            className='search'
                            id='standard-basic' 
                            label='Word'
                            helperText='Enter a word'
                            value={word}
                            onChange={(e)=>{setWord(e.target.value)}}
                            >

                        </TextField>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            className='select'
                            id="standard-select-currency"
                            select
                            label="Language"
                            value={language}
                            onChange={handleLangugeChange}
                            helperText="Select a language"
                            selected={language}
                            >
                            {
                                languages.map((option)=>(
                                    <MenuItem key={option.label} value={option.label}>
                                        {option.value}
                                    </MenuItem>
                                    )
                                )
                            }
                        </TextField>
                    </Grid>
                </ThemeProvider>
            </Grid>
        </div>
    )
}

export default Header;
