import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class Calendar extends Component {
	constructor(props) {
      super(props);
      this.state = {
      };
    }

	componentWillReceiveProps = (newProps) => {
		// console.log(newProps)
		this.getCalendarEvents(newProps.lessons)
	}

	componentDidMount () {
	}

	getCalendarEvents = lessons => {

		var events =[];
		for (var i = 0; i < lessons.length; i++) {
			console.log(lessons[i])
			let {_id, classYear, classMonth, classDay, title} = lessons[i];
			var newevent = {
				'Date': new Date(classYear, classMonth -1, classDay), 
				'Title': title,
				'Link': `/lesson/${_id}`
			}
			events.push(newevent);
		}

		var settings = {
			EventClick: (path) => {
				this.props.history.push(path)
			}
		};

		var element = document.getElementById('calendarContainer');
		element.innerHTML = "";
		window.caleandar(element, events, settings);
	}

	render() {

		return (
		<div id="calendarContainer">
		</div>
		);
	};
};

export default withRouter(Calendar)