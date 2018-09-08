import React from 'react';
import classes from './UserInput.css';

const userInput = (props) => {
    
    return (
        <div >
            <input type="text" name="user" onChange={props.changed} className={classes.userinput}/>
            <input type="button" value="Get Data" onClick={props.clicked} className={classes.userbtn}/>
        </div>
    );
};

export default userInput;