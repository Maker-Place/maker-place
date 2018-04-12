import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getAllClasses} from '../ClassData';

export default class ClassesPage extends Component {
    renderClassLink (lesson) {
        let path = `/classes/${lesson.title}`;
        return (
            <div key={lesson.title}>

                <div className="card">
                    <Link to={path}>{lesson.title}</Link>
                    <p>{lesson.description ? lesson.description :''}</p>

                </div>
            </div>
        );
    }

    render () {
        // get all the data for each class
        let classTitles = getAllClasses();
        // change to cards, passing the whole class object to the function
        let cards = classTitles.map(this.renderClassLink);
        return (
            <div>
                <h2>Here are all the classes!</h2>
                {cards}
            </div>
        );
    }
};