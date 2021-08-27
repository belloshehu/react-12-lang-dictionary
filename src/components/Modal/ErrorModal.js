import React from 'react';
import {Grid, Paper, Button} from '@material-ui/core';
import {CloudOff} from '@material-ui/icons';
import './ErrorModal.css';

const Error = ({error, setError, themeColor}) => {

    const style = {
        container: {
            padding: '5px',
            backgroundColor: themeColor==="dark"? '#234c54': 'white',
            border: themeColor==="dark"? '1px solid white': '1px solid #234c54',
            borderRadius: '10px'
        },
        paper: {
            padding: '10px',
        },
        button: {
            textAlign: 'right'
        }
    }
    return (
        <div className='error'>
            <Grid container direction='column' 
                justify='space-between' 
                style={style.container}
                spacing={2}
                >
            
                <Grid item xs={12}  style={style.paper}>
                    <CloudOff></CloudOff>
                    <Paper style={style.paper}>
                        Oops! Something went wront. Check your internet connection
                    </Paper>
                </Grid>
                <Grid item xs={12} style={style.button}>
                    <Button variant='contained' onClick={()=>setError(!error)} >Close</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Error;
