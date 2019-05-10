import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";

import { ApolloProvider } from "react-apollo";
import client from './client/client'

import App from './App';
import CharacterInfo from './components/CharacterInfo'

const Root = () => (
    <ApolloProvider client={client}>
        <Router>
            <Switch>
                <Route exact path="/:id" component={CharacterInfo} />
                <Route path="/" component={App} />
            </Switch>
        </Router>
    </ApolloProvider>
);

export default Root;
