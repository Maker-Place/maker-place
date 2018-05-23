import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

import Divider from '@material-ui/core/Divider';

import { withTheme } from '@material-ui/core/styles';

import API from '../../utils/API';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Calendar from '../Calendar/Calendar';
import './LessonsPage.css';
import sanitize from '../Sanitize.js';

import { withStyles } from 'material-ui/styles';

  let styles = {
     green: {
      backgroundColor: "green"
     }
    };

class LessonsPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        done: '',
        lessons: [],
        categories: []
      };
    };


    getLessonData = (category) => {
      API.getLessonsByCategory(category).
      then(response => {
        let lessons = response.data;
        this.setState({lessons: lessons})
      })
      .catch(err => console.log(err));
    }

    componentWillReceiveProps(newProps) {
      this.getLessonData(this.parseSlug(newProps.match.params.category));
    }

    parseSlug(slug) {
      String.prototype.replaceAll = function(search, replacement) { 
          var target = this; 
          return target.replace(new RegExp(search, 'g'), replacement); 
      };
      let category = slug.replaceAll("_", " ")
      category = category.replaceAll("&","&amp;");
      this.setState({category});
      return category;
    }

    componentDidMount() {
        //if there's a category, get the lessons
        if (this.props.match.params.category) {
          this.getLessonData(this.parseSlug(this.props.match.params.category));
        }
    }
    handleFavorite = favoriteid => {
      
      API.addFavorite(favoriteid)
      .then(response => {

        if (!response.data) {
          console.log("you're not logged in");
        } else { 
          console.log("favorited");
        }
      })
      .catch(err => console.log(err));
    }

  // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
    openLessonPage = (lesson) => {
        console.log(lesson);
        let { history } = this.props;
        let path = `/lesson/${lesson}`;
        history.push(path);
    }
    
  renderClassTile = (lesson) => {
    const {classes} = this.props;
    const {theme} = this.props;
    const primaryText = theme.palette.text.primary;
    styles = {
      primaryTextee: {
        backgroundColor: theme.palette.primary.main,
      }
    };

    
    // deconstruct the data 
    let { _id, title, startTime, startDate, description, classTimes, registerLink } = lesson; 
    // since the api returns scraped data that still includes html
    // markup, we want to make sure we're sanitizing it prior to rendering it
    let clean_description = sanitize(description);

    return ( 

      <Grid item xs={4}>
      {theme.palette.primary.main}

        <Card >
          <CardContent classes={{root: classes.green}} onClick={() => this.openLessonPage(_id)}>
              <Typography color="secondary" gutterBottom variant="title" component="h2" dangerouslySetInnerHTML={{__html: sanitize(title)}}></Typography>
              <Typography>
                {classTimes.length ? (
                   classTimes.map(time => (<p>{time}</p>))
                ) : 
                (
                    <span>{startDate}, {startTime}</span>
                )}
              </Typography>
             </CardContent>
             <Divider/>
          <CardActions>
            <Button color="secondary" onClick={() => this.openLessonPage(_id)}>See Details</Button>
            <Button href={registerLink} target="_blank">Register</Button>
            <Checkbox 
              onChange={(checked) => {
                    this.handleFavorite(_id); 
                  }
                }
              icon={<FavoriteBorder />} 
              checkedIcon={<Favorite />} 
              value="checkedH" 
            />
      
          </CardActions>
      </Card>
      </Grid>
  )}; 


    renderCategoryTile = (category) => {
      let image_url ='https://material-components-web.appspot.com/images/1-1.jpg';
        return (
        
          <Link to={"/lessons/" + category} key={category}>
            <Grid item className="LessonTile">
              {category}
            </Grid>
          </Link>
        )
    }

    render () {
        // get all the data for each class
        //putting the p tag inside allows it to not have an empty space if there
        // is no date  //
        // change to cards, passing the whole class object to the function
        // how do we get work with the below? 
        // can we make a tile look like a card? 
        let tiles = this.state.lessons.map(this.renderClassTile);
        let categories = this.props.categories ? this.props.categories.map(this.renderCategoryTile) : "";
        return (
            <div className="wrap">

                <Grid container spacing={16}>
                  {/*<GridCell span="12">
                    <h1 className="mb-4">Class Calendar: <span dangerouslySetInnerHTML={{__html: sanitize(this.state.category)}}></span></h1>
                    <Calendar lessons={this.state.lessons}/>
                  </GridCell>*/}

                    {/* if there are lessons, show the lessons, otherwise show the categories */}
                    {this.state.lessons.length ? tiles : categories}
              
                </Grid>
 
            </div>
        );
    }

}

export default withStyles(styles)(withTheme()(LessonsPage));