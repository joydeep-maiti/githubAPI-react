import React from 'react';
import classes from './Repo.css';

const repo = (props) => {
    return (
        <div className={classes.repo}>
            <a href={props.url} className={classes.repotitle}>{props.reponame}</a>
            <p className={classes.desc}>{props.desc}</p>
            <p className={classes.forks}>Forks:{props.forks}</p>
        </div>
    );
}

export default repo;