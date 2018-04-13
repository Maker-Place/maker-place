import React, {Component} from 'react';

import {getLessonByTitle} from '../LessonData';

// edit css for this page here:
import './LessonPage.css';

class ClassCard extends Component {
    render () {
        let {
            title,
            image_url,
            description,
            time,
            date
        } = this.props;
        // if you want to add more class properties here, make sure you add them to LessonData.js
        // i believe the above needs to be changed.
        // the above is shorthand for:
        // let title =this.props.title;
        // let image_url = this.props.image
        //...

        return (
            <div className="ClassCard">
                <h2>Here is a class about {title}</h2>
                <img alt="lesson" src={image_url} />
                <div>Date: {date} Time: {time}</div>
                <p>
                    {description}
                </p>
            </div>
        );
    }
}
//
export default class LessonPage extends Component {
    render () {
        let {title} = this.props.match.params;
        let LessonData = getLessonByTitle(title);

        return (
            <div style={{padding: 10}}>
                <ClassCard {...LessonData}/>
            </div>
        );
    }
};
