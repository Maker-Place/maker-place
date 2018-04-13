import React, {Component} from 'react';
import API from '../utils/API';

export default class ClassesPage extends Component {
    getClassData = () => {
        //axios.get("/api/scrape")
        API.getClasses()
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
            <button onClick={this.getClassData}>Scrape</button>
        );
    }
};