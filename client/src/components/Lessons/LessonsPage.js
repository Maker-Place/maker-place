import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
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

import {getAllLessons} from '../LessonData';
import './LessonsPage.css';

class LessonsPage extends Component {
    getLessonData = () => {
        API.getLessons()
        .then(
            res => {
                console.log("react Scrape.js");
                console.log(res);
            }
        )
        .catch(err => console.log(err));
    }
    componentDidMount() {
        console.log("getting lesson data");
        this.getLessonData();
    }
    // see: 5. Use Arrow Function in Class Property on this page:
    // https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
    openLessonPage = (lesson)=> {
      let {history} = this.props;
      let path = `/lessons/${lesson.title}`;
      history.push(path);
    }

    renderClassTile = (lesson)=> {
        let image_url = lesson.image_url || 'https://material-components-web.appspot.com/images/1-1.jpg';
        return (
            <GridTile className="LessonTile" key={lesson.title} onClick={()=> {this.openLessonPage(lesson)}}>
              <GridTilePrimary>
                <GridTilePrimaryContent>
                  <img src={image_url} alt="test" />
                </GridTilePrimaryContent>
              </GridTilePrimary>
              <GridTileSecondary theme="text-primary-on-primary">
                <GridTileTitle>{lesson.title}</GridTileTitle>
                <GridTileTitleSupportText>{lesson.date} {lesson.time}</GridTileTitleSupportText>
              </GridTileSecondary>
            </GridTile>
        );
    }


    // <div key={lesson.title}>
    //
    //     <div className="card">
    //         <Link to={path}>{}</Link>
    //         {lesson.description ? <p>{lesson.description} </p> : null}
    //         {lesson.Date ? <p>{lesson.Date} </p> : null}
    //         {lesson.Time ? <p>{lesson.Time} </p> : null}
    //     </div>
    // </div>

    render () {
        // get all the data for each class
        //putting the p tag inside allows it to not have an empty space if there
        // is no date  //
        let allClasses = getAllLessons();
        // change to cards, passing the whole class object to the function
        let tiles = allClasses.map(this.renderClassTile);
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
                  {tiles}
                </GridList>
            </div>
        );
    }
}

export default withRouter(LessonsPage);
