import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Pages used in routes
import HomePage from './components/Home/HomePage.js';
import About from './components/About/About.js';
import LessonsPage from './components/Lessons/LessonsPage.js';
import LessonPage from './components/Lesson/LessonPage';
import MembershipsPage from './components/Memberships/MembershipsPage';
import Nav from './components/Nav/';
import './App.css';
import NotFound from './components/ErrorPage/NotFound.js';
import API from './utils/API';

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
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories() {
    API.getAllCategories()
      .then(response => {
        this.setState({categories: response.data}, () => {console.log(this.state.categories)});
      })
      .catch(err => console.log(err));
  }
  render() {
    return(
      <div>
        <Router>
          <div>
            
            <div>
              <Nav categories={this.state.categories}/ >

              <Route exact path="/" component={HomePage}/>
            {/*have to use render function instead of component to pass props with react router*/}
              <Route exact path="/lessons" render={(props) => <LessonsPage categories={this.state.categories}/>} />

              <Route path="/lesson/:id" component={LessonPage} />
              <Route path="/lessons/:category" component={LessonsPage} />
              {/* why not have this under /categories/:category and have a CategoryPage */}
              <Route path="/memberships" component={MembershipsPage} />
              <Route path="/Error" component={NotFound} />
              <Route path="/About" component={About} />

            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
