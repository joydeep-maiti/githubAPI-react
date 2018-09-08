import React from 'react';
import classes from './UserProfile.css';

const userProfile = (props) => {

    return (
        <div className={classes.profile}>
            <img src={props.url} />
            <h3 className={classes.name}>{props.name}</h3>
            <h4 className={classes.username}>{props.username}</h4>
            <p><a href={props.github}>{props.github}</a></p>
            <p className={classes.repo}>Repositories : {props.repos}</p>
            <p className={classes.flwrs}>Followers : {props.followers}</p>
            <p className={classes.flw}>Following : {props.following}</p>
        </div>
    );
};

export default userProfile;