import React from 'react';
import Repo from './Repo/Repo';

const repos = (props) => {

        return (
            props.array.map(index => {
                return <Repo 
                            reponame={index.name} 
                            key={index.id} url={index.html_url} 
                            forks={index.forks_count}
                            desc={index.description}/>
            })
            
        );
}

export default repos;