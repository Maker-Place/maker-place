import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

// Pages used in routes
import HomePage from './components/Home/HomePage.js';
import About from './components/About/About.js';
import LessonsPage from './components/Lessons/LessonsPage.js';
import LessonPage from './components/Lesson/LessonPage';
import MembershipsPage from './components/Memberships/MembershipsPage';
import ToolList from './components/ToolList/ToolList';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import SocialLogin from './components/SocialLogin/SocialLogin' ;
import Dashboard from "./components/Dashboard/Dashboard";

import Nav from './components/Nav/';
import './App.css';
import NotFound from './components/ErrorPage/NotFound.js';
import API from './utils/API';
import axios from 'axios';


// This is where you define top level routes in the app mapping some url to a given page component
// to add a new page/route:
// 1) import page component
// 2) add <Route> jsx tag with path and component
//
// adding route with custom params:
// <Route exact path="/classes" render={(props)=> (
//   <LessonsPage {...props} classNames={CLASS_NAMES} />
// )}/>
class App extends Component {
  state = {
    categories: [],
    loggedin: false,
    loading: true,
    user: {}
  };

  componentWillMount() {
    this.checkLoggedIn();
  }

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    API.getAllCategories()
      .then(response => {
        this.setState({categories: response.data});
      })
      .catch(err => console.log(err));
  }
  checkLoggedIn = () => {
    // set to loading state while getting auth data
    this.setState({loading: true});
    axios.get('/api/user/checkloggedin')
    .then(res => {
      if (res.data) {
        this.setState({loggedin: true, loading: false}, this.setUser(res.data))
          
      } else {
        this.setState({loggedin: false, loading: false}, this.setState({user: {}}));
      }
    })
  }
  setUser = user => {
    let {name, _id} = user;
    this.setState({user: user});
  }

  PrivateRoute = ({ component: Component, loading, ...rest }) => {
    // if the auth data has been returned we can render the component or redirect
    // otherwise return null until the state gets updated, which triggers a rerender
    if (!loading) {
        return (<Route {...rest} render={(props) => (
          this.state.loggedin === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login'
              }} />
        )} />)
      } 
      return null
      
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return !this.state.loading;
  // }

  render() {
    return(
      <div>
        <Router>
          <div>
            
            <div>
              <Nav categories={this.state.categories} loggedin={this.state.loggedin} checkLoggedIn={this.checkLoggedIn}/ >
              {this.state.user._id
              ? (
              <div>
                <p> Hello, {this.state.user.name} </p>
                <p> Your user ID is: {this.state.user._id} </p>
              </div>
              )
              : "" }
  
              <Switch>

                <Route exact path="/" component={HomePage}/>
              {/*have to use render function instead of component to pass props with react router*/}
                <Route exact path="/lessons" render={(props) => <LessonsPage/>} />
                <Route exact path="/login" render={(props) => <Login checkLoggedIn={this.checkLoggedIn} setUser={this.setUser} /> } />
                <Route exact path="/register" component={Register} />

                <Route path="/lesson/:id" component={LessonPage} />
                <Route path="/lessons/:category" component={LessonsPage} />
                {/* why not have this under /categories/:category and have a CategoryPage */}
                <this.PrivateRoute loading={this.state.loading} path="/dashboard" component={Dashboard} />
                <Route path="/memberships" component={MembershipsPage} />
                
                <Route path="/tools" component={ToolList} />
                <Route path="/Error" component={NotFound} />
                <Route path="/About" component={About} />
                <Route component={NotFound} />
              </Switch>

            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App ;
