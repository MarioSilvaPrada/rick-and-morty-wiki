import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";

import { ApolloProvider } from "react-apollo";
import client from './client/client'

import App from './App';
import CharacterInfo from './components/CharacterInfo'

const Root = () => (
    <ApolloProvider client={client}>
        <Router>
            <Switch>
                <Redirect exact from="/" to="/1" />
                <Route exact path="/char/:id" component={CharacterInfo} />
                <Route path="/:page" component={App} />
            </Switch>
        </Router>
    </ApolloProvider>
);

export default Root;
