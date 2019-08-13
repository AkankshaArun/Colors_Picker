import React from 'react';
import {withStyles} from '@material-ui/styles';


const styles = {
    main: {
        backgroundColor: 'green',
        border: '2px solid black',
        '& h1': {
            color: 'red'
        }
    }
};

function MiniPalette(props){
    const {classes} = props;
    return(
        <div className={classes.main}>
            <h1>Mini Palette</h1>
        </div>
    );
}

export default withStyles(styles)(MiniPalette);