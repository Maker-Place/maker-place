
import React, { Component } from 'react';
import { getLessonByTitle } from '../LessonData';
// edit css for this page here:
import './LessonPage.css';
import './LessonPage.scss';
export default class LessonPage extends Component {
    render() {
        let { title } = this.props.match.params;
        
        let props = getLessonByTitle(title);
        console.log(props);
        return (
            <div style={{ padding: 10 }}>
                <div className="ClassCard">
                    <h2> {props.title}</h2>
                    <div>Category{props.category}</div>
                    <div> {props.description}</div>
                    <img alt="" src={props.image_url} />
                    <div>Start Date:{props.startdate ? props.startdate : props.classTimes.join(',')}</div>
                     {/* if statment in here to show if starttime.length >1 then show that otherwise  */}
                    <div>Start Time: {props.starttime} </div>
                    <div>Register Link:{props.registerLink}</div>
                    <div>Location: {props.location}</div>
                    <div>Register Options:{props.registrationOptions}</div>
                    <button> Register {() => { this.openLessonPage() }}</button>
                    

                </div>
            </div>
        );
    }
};
               
                       
                    