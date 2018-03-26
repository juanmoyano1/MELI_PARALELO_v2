import React, {Component} from 'react';
import ItemDisplay from './ItemDisplay/ItemDisplay';
import Item from './Item/Item';
import Trend from './Trends';
import LoginPage from './Login';
import RegisterPage from './Register';
import NotFound from './NotFound/NotFound'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={ItemDisplay} />
                    <Route exact path="/items/:itemID" component={Item}/>
                    <Route path="/login" component={LoginPage} />
                    <Route path="/register" component={RegisterPage} />
                </div>
            </Router>
        );
    }
}

export default App;
