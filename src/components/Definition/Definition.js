import React from 'react'
import { createStyles, Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import './Definition.css';

const Definition = ({word, meanings, language}) => {
    const styles = createStyles(
        {
            paper: {
                padding: '10px',
                textAlign: 'left',
                margin: '10px 0px'
            }
        }
    )
    return (
        <div className='definitions'>
            { meanings[0] && word && language==='en' && (
                <audio controls 
                    src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
                    className='audio'
                >
                    Your browser does not support audio
                </audio>
                )}
            <Grid container 
                spacing={0} 
                justify='flex-start'
                className='definition'>
                    {  
                        word === "" ? (
                        <Grid item xs={12}>
                            <Paper style={styles.paper}>Type in a word in the box</Paper>
                        </Grid>
                        ):(
                            meanings.map((meaning)=>(
                                meaning.meanings.map((item)=>(
                                    item.definitions.map((definition)=>(
                                        <Grid item xs={12}>
                                            <Paper style={styles.paper}>
                                                <sup className='meaning'>[Meaning]  </sup>
                                                    <b>{definition.definition}</b>
                                                { definition.example && (
                                                    <div>
                                                        <hr />
                                                        <sup className='meaning'>[Example]  </sup>
                                                            <i>{definition.example}</i>
                                                    </div>
                                               )}
                                                { definition.example && (
                                                    <div>
                                                    <hr />
                                                    <sup className='meaning'>[Synonyms]  </sup>
                                                        {
                                                            definition.synonyms.map((synonym)=>(    
                                                                <span>{synonym}, </span>
                                                            ))
                                                        }
                                                    </div>
                                                )}
                                                </Paper>
                                        </Grid>
                                    ))
                                ))
                            ))
                        )
                    }    
            </Grid>
        </div>
    )
}

export default Definition;
