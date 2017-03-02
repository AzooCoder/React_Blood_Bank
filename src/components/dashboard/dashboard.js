import React, { Component } from 'react';
import * as mat from 'material-ui';
import {
    hashHistory,
    Router,
    Route,
    IndexRoute,
    IndexRedirect,
    Link,
    IndexLink
} from 'react-router';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
        this.donateBlood = this.donateBlood.bind(this);
    }

    componentDidMount() {
        //This is called for Loading Initial State
        this.props.loadInitialState();
    }

    donateBlood() {
        this.props.donateBloodRequest(this.props.application.user);
        // console.log(this.props);

    }

    render() {
        const style = {
            height: 100,
            width: 300,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block',
        };
        return (
            <div>
                <mat.AppBar
                    title="Dashboard"
                    />
                <mat.Drawer open={this.state.open}>
                    <mat.MenuItem>Menu Item</mat.MenuItem>
                    <mat.MenuItem>Menu Item 2</mat.MenuItem>
                </mat.Drawer>
                <div>
                    <mat.Paper style={style} zDepth={3} >
                        <h3 onClick={this.donateBlood}>I want to Donate Blood.</h3>
                    </mat.Paper>
                    <mat.Paper style={style} zDepth={3} >
                        <Link to="/requiredblood"><h3>I Required Blood.</h3></Link>
                    </mat.Paper>
                </div>
            </div>
        );
    }
}

export default Dashboard;