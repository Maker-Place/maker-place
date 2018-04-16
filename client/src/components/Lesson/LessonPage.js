
import API from '../../utils/API';
import React, { Component } from 'react';
import { getLessonByTitle } from '../LessonData';
// edit css for this page here:
import './LessonPage.css';
import './LessonPage.scss';
export default class LessonPage extends Component {
  

    constructor(props) {
      super(props);
      this.state = {
        lesson: []
      };
    }
    componentDidMount() {
        this.getLesson(this.props.match.params.id);
    }
    getLesson = id => {
        API.getLessonById(id)
        .then(response => {
            this.setState({lesson: response.data});
        })
        .catch(err => console.log(err));
    }

    render () {
        return (
            <div style={{ padding: 10 }}>
                <div className="ClassCard">
                    <h2> {this.state.lesson.title}</h2>
                    <div>Category {this.state.lesson.category}</div>
                    <div> {this.state.lesson.description}</div>
                    <img src={this.state.lesson.image_url} />
                    <div>Start Date:{this.state.lesson.startdate ? this.state.lesson.startdate : this.state.lesson.classTimes.join(',')}</div>
                     {/* if statment in here to show if starttime.length >1 then show that otherwise  */}
                    <div>Start Time: {this.state.lesson.starttime} </div>
                    <div>Register Link:{this.state.lesson.registerLink}</div>
                    <div>Location: {this.state.lesson.location}</div>
                    <div>Register Options:{this.state.lesson.registrationOptions}</div>
                    <button> Register {() => { this.openLessonPage() }}</button>
                    
                </div>
            </div>
        );
    }
};
               
                       
                    