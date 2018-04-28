import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  GridList,
  GridTile,
  GridTilePrimary,
  GridTilePrimaryContent,
  GridTileSecondary,
  GridTileTitle,
  GridTileTitleSupportText
} from 'rmwc/GridList';
import { Grid, GridCell } from 'rmwc/Grid';
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from 'rmwc/Card';
import { Typography } from 'rmwc/Typography';
import Button from 'rmwc/Button';
import API from '../../utils/API';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { IconToggle } from 'rmwc/IconToggle';
import Calendar from '../Calendar/Calendar';
import './LessonsPage.css';
import sanitize from '../Sanitize.js';


class LessonsPage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        done: '',
        lessons: [],
        categories: []
      };
    }

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
    // deconstruct the data 
    let { _id, title, startTime, startDate, description, classTimes, registerLink } = lesson; 
    // since the api returns scraped data that still includes html
    // markup, we want to make sure we're sanitizing it prior to
    // rendering it
    let clean_description = sanitize(description);

    return ( 

      <GridCell span="4">

      <Card>
        <CardPrimaryAction onClick={() => this.openLessonPage(_id)}>
          <div style={{padding: '1rem 1rem 1rem 1rem'}}>
            <Typography use="title" tag="h2" dangerouslySetInnerHTML={{__html: sanitize(title)}}></Typography>
            <Typography
              // use="subheading1"
              tag="ul"
              theme="text-secondary-on-background">
              {classTimes.length ? (
                 classTimes.map(time => (<li>{time}</li>))
              ) : 
              (
                  <li>{startDate}, {startTime}</li>
              )}
            </Typography>
          </div>
        </CardPrimaryAction>
        <CardActions>
          <CardActionButtons>
           <CardAction onClick={() => this.openLessonPage(_id)}>See Details</CardAction>
            <CardAction tag="a" href={registerLink} target="_blank">Register</CardAction>
          </CardActionButtons>
          <CardActionIcons>
            <IconToggle
              theme="secondary"
              on={{label: 'Remove from favorites', content: 'favorite' }}
              off={{label: 'Add to favorites', content: 'favorite_border'}}
              onChange={(checked) => {
                  if (checked.detail.isOn) {
                    this.handleFavorite(_id);
                  }
                }
              }
            />
          
          </CardActionIcons>
        </CardActions>
      </Card>
      </GridCell>
  )}; 


    renderCategoryTile = (category) => {
      let image_url ='https://material-components-web.appspot.com/images/1-1.jpg';
        return (
        
          <Link to={"/lessons/" + category} key={category}>
            <GridTile className="LessonTile">
             <GridTilePrimary>
                <GridTilePrimaryContent>
                  <img src={image_url} alt="test" />
                  
                </GridTilePrimaryContent>
              </GridTilePrimary>
              <GridTileSecondary theme="text-primary-on-primary">
                <GridTileTitle>{category}</GridTileTitle>
              </GridTileSecondary>
            </GridTile>
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
            <div className="LessonsPage">
             <div className="lessons-image">
                <Grid>
                  <GridCell span="12">
                    <h1 className="mb-4">Class Calendar: <span dangerouslySetInnerHTML={{__html: sanitize(this.state.category)}}></span></h1>
                    <Calendar lessons={this.state.lessons}/>
                  </GridCell>

                    {/* if there are lessons, show the lessons, otherwise show the categories */}
                    {this.state.lessons.length ? tiles : categories}
              
                </Grid>
             </div>
            </div>
        );
    }

}

export default withRouter(LessonsPage);