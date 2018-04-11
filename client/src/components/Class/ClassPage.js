
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import {getClassByTitle} from '../ClassData';

// edit css for this page here:
import './ClassPage.css';

class ClassCard extends Component { 
    render () {
        let {
            title, 
            image_url, 
            description,
            time,
            date
        } = this.props;
        // if you want to add more class properties here, make sure you add them to ClassData.js

        // the above is shorthand for:
        // let title =this.props.title;
        // let image_url = this.props.image
        //... 
               
        return (
            <div className="ClassCard">
                <h2>Here is a class about {title}</h2>
                <img src={image_url} />
                <div>Date: {date} Time: {time}</div>
                <p>
                    {description}
                </p>
            </div>
        );
    }
}
//  
export default class ClassPage extends Component {
    render () {
        let {title} = this.props.match.params;
        let classData = getClassByTitle(title);
       
        return (
            <div style={{padding: 10}}>
                <ClassCard {...classData}/>
            </div>
        );
    }
};