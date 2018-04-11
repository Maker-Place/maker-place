import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getAllClasses} from '../ClassData';

export default class ClassesPage extends Component {
    renderClassLink (title) {
        let path = `/classes/${title}`;
        return (
            <div key={title}>
                <Link to={path}>{title}</Link>
            </div>
        );
    }

    render () {
        let classTitles = getAllClasses().map((c)=> c.title);
        let links = classTitles.map(this.renderClassLink);
        return (
            <div>
                <h2>Here are all the classes!</h2>
                {links}
            </div>
        );
    }
};