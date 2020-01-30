import React, { useState, Fragment } from 'react';
import {user} from '../../services/user';
import {login} from '../../services/auth';
import { Button, TextField, Paper, Grid, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './login.css';

const Login=() =>{
    const [isLogin,setIsLogin]=useState(true);
    const [FullName, setFullName]=useState('');
    const [userLogin, setUserLogin]=useState('');
    const [userPassword, setPassword]=useState('');
    const history=useHistory();


    const onLoginChange=(event)=>{
        setUserLogin(event.target.value);
    };

    const onRegister=async (event)=>{
        event.preventDefault();
        const response=await user.register(userLogin,FullName,userPassword);
        console.log(response);
    };

    const onLogin=async (event)=>{
        event.preventDefault();
        const response=await login(userLogin,userPassword);
        if(response.status>=200 && response.status<300){
            history.push('/timeline');
        }
        console.log(response);
    };

    const renderLogin=()=>{
        return(
            <Fragment>
                <TextField
                    id="userLogin"
                    label="User Login"
                    value={userLogin}
                    onChange={onLoginChange}
                    required
                />
                <TextField
                    type="password"
                    id="password"
                    label="Password"
                    value={userPassword}
                    onChange={(event)=>setPassword(event.target.value)}
                    required
                />
                <Button type="submit" color="primary">Login</Button>
                <Button color="primary" onClick={()=>setIsLogin(!isLogin)}>Sing in</Button>
            </Fragment>
            
        );
    };

    const renderRegister=()=>{
        return (
            <Fragment>
                <TextField
                    id="fullname"
                    label="Full Name"
                    value={FullName}
                    onChange={(event)=>setFullName(event.target.value)}
                    required
                />
                <TextField
                    id="userLogin"
                    label="User Login"
                    value={userLogin}
                    onChange={onLoginChange}
                    required
                />
                <TextField
                    type="password"
                    id="password"
                    label="Password"
                    value={userPassword}
                    onChange={(event)=>setPassword(event.target.value)}
                    required
                />
                <Button type="submit" color="primary">Sing up</Button>
                <Button type="submit" color="secondary" onClick={()=>setIsLogin(true)}>Back</Button>
            </Fragment>
        );
    }

    return (
        
        <div className="login">
            <Grid item xs={2} className="grid">
                <Paper className="paper">
                    <form onSubmit={isLogin? onLogin : onRegister}>
                        <Typography variant="h6"> 4T Insta</Typography>
                        {isLogin? renderLogin() : renderRegister()}
                    </form> 
                </Paper>
            </Grid>
        </div>
    );
};

export default Login;