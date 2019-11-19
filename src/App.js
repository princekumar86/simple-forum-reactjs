import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';
import UserProfile from './components/UserProfile';
import SearchUser from './components/SearchUser';


class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
            <div className="header">Simple Forum</div>
            <div className="md-col-8">
              <nav>
                <ul>
                  <li><Link to="/">Home / All Posts</Link></li>
                </ul>
              </nav>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/post/:id" component={Post} />
                <Route path="/user/:id" component={UserProfile} />
              </Switch>
            </div>
            <div className="sidebar md-col-4">
              sidebar
            <hr/>
            <br/>
            <SearchUser />
            </div>
            
        </div>
        
      </Router>
    );
  }
}

export default App;
