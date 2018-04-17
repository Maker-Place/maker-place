import API from '../../utils/API';
import React, { Component } from 'react';
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
            this.setState({lesson: response.data}, () => console.log(this.state.lesson));
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <div style={{ padding: 10 }}>
                <div className="ClassCard">
                    <h2> {this.state.lesson.title}</h2>
                    <div>Category: {this.state.lesson.category}</div>

                    <div dangerouslySetInnerHTML={{__html: this.state.lesson.description}}></div>
                    <img src={this.state.lesson.image_url} alt="default"/>
                    <div>Start Date: {this.state.lesson.startDate} </div>

                    {this.state.lesson.classTimes 
                        ? 
                        (<div> Class Times:
                            <ul>
                            {this.state.lesson.classTimes.map((each, i) => (<li key={i}>{each}</li>))}
                            </ul>
                        </div>)
                            : <div>Start Time: {this.state.lesson.startTime}</div>
                         
                        }
                   
                     {/* if statment in here to show if starttime.length >1 then show that otherwise  */}
                    <div>Register Link:{this.state.lesson.registerLink}</div>
                    <div>Location: {this.state.lesson.location}</div>
                    <div>Register Options:{this.state.lesson.registrationOptions}</div>
                    <a className="btn btn-primary" target="_blank" href={this.state.lesson.registerLink}>Register</a>
                    
                </div>
            </div>
        );
    }
};

