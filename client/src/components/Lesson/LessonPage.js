import React, {Component} from 'react';

import {getLessonByTitle} from '../LessonData';
import API from '../../utils/API';

// edit css for this page here:
import './LessonPage.css';


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
            <div style={{padding: 10}}>
                <div className="ClassCard">

                    <h2> {this.state.lesson.title}</h2>
                    <h3> desc</h3>
           
                    <div>Date </div>
                    <div>Time  </div>
                    
                </div>
            </div>
        );
    }
};
