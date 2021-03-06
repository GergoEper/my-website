import './App.css';
import React from 'react';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import { Route, Redirect } from 'react-router-dom';

class App extends React.Component {

  state = {
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div>
        <Navbar 
          user={this.state.user} 
          setUser={this.setUser} 
        />
        <ProtectedRoute
          exact path='/projects'
          user={this.state.user}
          component={Projects}
        />
        <Route
          exact path='/projects/:id'
          component={ProjectDetails}
        />
        <Route
          exact path='/signup'
          // component={Signup}
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact path='/login'
          render={props => <Login setUser={this.setUser} {...props} />}
        />
      </div>
    );
  }
}

export default App;