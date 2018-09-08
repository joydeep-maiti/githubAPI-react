import React, { Component } from 'react';
import UserInput from '../../Component/UserInput/UserInput';
import UserProfile from '../../Component/UserProfile/UserProfile';
import Repos from '../../Component/Repos/Repos';
import Spinner from '../../Component/Spinner/Spinner';
import axios from '../../axiosinstance';
import classes from './User.css';

class User extends Component {
    state = {
        userName: null,
        name:null,
        imgUrl: null,
        repos: null,
        githubProfile:null,
        totalRepos:null,
        followers:null,
        following:null,
        loading: false
    }

    nameChangeHandler = (event) => {
        this.setState(
            {
                userName: event.target.value
            }
        )
    }

    btnClicked = () => {
        this.setState({loading:true});
        axios.get("https://api.github.com/users/"+this.state.userName)
        .then( response => {
            this.setState ({
                name: response.data.name,
                imgUrl: response.data.avatar_url,
                githubProfile: response.data.html_url,
                followers: response.data.followers,
                following: response.data.following
            });
            axios.get(response.data.repos_url)
            .then(res => {
                console.log('res',res.data);
                this.setState({
                    repos: res.data,
                    totalRepos: res.data.length,
                    loading:false
                });
            });
            
        })
        .catch(error => {
            this.setState({loading:false});
            alert(error);

        });
    }

    render() {
        let repos = null;
        if(this.state.repos !== null) {
            repos = <Repos array={this.state.repos} />
        }
        let userprofile = null;
        if(this.state.name !== null) {
            userprofile = <UserProfile 
                                url={this.state.imgUrl} 
                                name={this.state.name} 
                                username={this.state.userName} 
                                github={this.state.githubProfile}
                                repos={this.state.totalRepos}
                                followers={this.state.followers}
                                following={this.state.following} />
        }
        let loading= null;
        if (this.state.loading) {
            loading = <Spinner />
        }
        else {
            loading =   <div className={classes.mainprofile}>
                            {userprofile}
                            <div className={classes.repogrid}>
                                {repos}
                            </div>
                        </div>
        }
        return(
            <div>
                <UserInput 
                    changed={this.nameChangeHandler} 
                    clicked={this.btnClicked} />
                {loading}
            </div>
        );
    }
}

export default User;