import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Landing, Who, Gallery, NotFound404 } from './pages';
import { NavBar, Footer } from './layout';

import './styles/app.css';

const App = () => {
    return (
        <div id="App">
            <NavBar />

            <main>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/who" component={Who} />
                <Route path="/what" component={Gallery} />
                <Route path="/*" component={NotFound404} />
            </Switch>
            </main>

            <Footer />
        </div>
    );
}

export default App;
