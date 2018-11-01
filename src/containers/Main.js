import React, { Component } from "react";
import Grid from '../components/Grid';

export default class Main extends Component {


    render() {
        return (
        <div className='main-app'>
                <h1>Welcome {localStorage.getItem('username')}</h1>
            <Grid />
        </div>
        );
    }
} 