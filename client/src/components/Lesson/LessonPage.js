import React, {Component} from 'react';

import {getLessonByTitle} from '../LessonData';

// edit css for this page here:
import './LessonPage.css';


export default class LessonPage extends Component {

    componentDidMount() {
        console.log("hi");
    }

    render () {
        let {title} = this.props.match.params;
        let props = getLessonByTitle(title);

        return (
            <div style={{padding: 10}}>
                <div className="ClassCard">

                    <h2> {props.title}</h2>
                    <h3> {props.description}</h3>
                    <img src={props.image_url} />
                    <div>Date {props.date} </div>
                    <div>Time {props.time} </div>
                    
                </div>
            </div>
        );
    }
};
