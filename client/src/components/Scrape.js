import React, {Component} from 'react';
import API from '../utils/API';

export default class ClassesPage extends Component {
    getClassData = () => {
        API.getClasses()
        .then(
            res => console.log(res)
        )
        .catch(err => console.log(err));
    }

    render () {
        
        return (
            <button onClick={this.getClassData}>Scrape</button>
        );
    }
};