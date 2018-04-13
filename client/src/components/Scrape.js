import React, {Component} from 'react';
import API from '../utils/API';

export default class LessonsPage extends Component {
     //axios.get("/api/scrape")
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

    render () {

        return (
            <button onClick={this.getLessonData}>Scrape</button>
        );
    }
};
