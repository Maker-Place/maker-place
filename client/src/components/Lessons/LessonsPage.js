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

import { getAllLessons } from '../LessonData';
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
    scrapeLessonData = () => {
        API.scrapeLessons("callback function")
        .then(
            res => {
                this.setState({done: res.data});
            }
        )
        .catch(err => console.log(err));
    }

    getLessonData = () => {
        let category = this.props.match.params.category;
        console.log(category);
        if (category) {
          API.getLessonsByCategory(category).
          then(response => {
            let lessons = response.data;
            this.setState({lessons: lessons})
          })
          .catch(err => console.log(err));
        } else {
          API.getAllCategories()
          .then(response => {
            this.setState({categories: response.data}, () => {console.log(this.state.categories)});
          })
          .catch(err => console.log(err));
        }
    }

    componentDidMount() {
        this.scrapeLessonData();
        this.getLessonData();
    }
    // see: 5. Use Arrow Function in Class Property on this page:
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
    // openLessonPage = (lesson)=> {
    //   let {history} = this.props;
    //   let path = `/lessons/${lesson.title}`;
    //   history.push(path);
    // }


  // see: 5. Use Arrow Function in Class Property on this page:
  // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
  openLessonPage = (lesson) => {
    let { history } = this.props;
    let path = `/lessons/${lesson.title}`;
    history.push(path);
  }

  renderClassTile = (lesson) => { 
    let image_url = lesson.image_url || 'https://material-components-web.appspot.com/images/1-1.jpg'; 
    // deconstruct the data 
    let { _id, title, startTime, startDate } = lesson; 
    return ( 
      // link to /lessons/:id 
      <Link to={"/lesson/" + _id} key={_id}> 
        <GridTile className="LessonTile"> 
          <GridTilePrimary> 
            <GridTilePrimaryContent> 
              <img src={image_url} alt="test" /> 
 
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
        let tiles = this.state.lessons.map(this.renderClassTile);
        let categories = this.state.categories.map(this.renderCategoryTile);
        return (
            <div>
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