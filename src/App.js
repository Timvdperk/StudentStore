import './App.css';
import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import home from './Components/Home';
import faq from './Components/faq';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={home} />
                    <Route path="/faq" component={faq} />
                    <Route path="/404" component={Error} />
                    <Redirect to="/404" />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;