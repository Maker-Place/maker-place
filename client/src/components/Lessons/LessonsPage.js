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
import API from '../../utils/API';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import sanitizeHtml from 'sanitize-html';

import './LessonsPage.css';

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
      this.getLessonData(newProps.match.params.category);
    }

    componentDidMount() {
        //if there's a category, get the lessons
        if (this.props.match.params.category) {
          this.getLessonData(this.props.match.params.category);
        }
    }

  // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
  openLessonPage = (lesson) => {
    let { history } = this.props;
    let path = `/lessons/${lesson.title}`;
    history.push(path);
  }

  renderClassTile = (lesson) => { 
    // deconstruct the data 
    let { _id, title, startTime, startDate, description } = lesson; 
    // since the api returns scraped data that still includes html
    // markup, we want to make sure we're sanitizing it prior to
    // rendering it
    let clean_description = sanitizeHtml(description, {
      allowedTags: ['p', 'a'],
      allowedAttributes: {
        a: ['href', 'target']
      }
    });

    return ( 
      // link to /lessons/:id 
      <Link to={"/lesson/" + _id} key={_id}> 
        <GridTile className="LessonTile"> 
          <GridTilePrimary> 
            <GridTilePrimaryContent> 
              <div 
                dangerouslySetInnerHTML={{__html: clean_description}}
              />
            </GridTilePrimaryContent> 
          </GridTilePrimary> 
          <GridTileSecondary theme="text-primary-on-primary"> 
            <GridTileTitle>{title}</GridTileTitle> 
            <GridTileTitleSupportText>{startDate} {startTime}</GridTileTitleSupportText> 
          </GridTileSecondary> 
        </GridTile> 
      </Link> 
    ); 
  } 


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
                <h2>Here are all the classes!</h2>
                
                <GridList
                  tileGutter1={true}
                  headerCaption={false}
                  twolineCaption={true}
                  withIconAlignStart={false}
                  tileAspect="1x1"
                >
                {/* if there are lessons, show the lessons, otherwise show the categories */}
                {this.state.lessons.length ? tiles : categories}
          
                </GridList>


            </div>
        );
    }

}

export default withRouter(LessonsPage);