import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import {connect} from "react-redux";
// import * as actions from '../actions';
// import mapStateToProps from "react-redux/lib/connect/mapStateToProps";


const SurveyNew = () => <h2>SurveyNew </h2>
const Landing = () => <h2>Landing </h2>


class App extends Component {

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div className="container">

                        <Route exact path="/" component={Landing}/>
                        <Route path="/surveys/new" component={SurveyNew}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default App;