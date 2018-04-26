import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import API from '../../utils/API';

class Dashboard extends Component {
	constructor(props) {
      super(props);
      this.state = {
      	favorites: []
      };
    }

    getFavorites = () => {
    	this.setState({lessons: "hi"});
    	
    	console.log("getting favorites");
    	//this.props.user._id
    	// "5ae0d443de7ce7ddcbc53a2d"
    	API.getFavorites(this.props.user._id)
    	.then(response => {
    		
    		let lessons = response.data;
    		console.log(lessons);
    		this.setState({favorites: lessons}, () => console.log(this.state))
    	})
    	.catch(err => console.log(err));
    }

    componentDidMount() {
    	this.getFavorites();
    }

	render() {
	    return(<div>

	        <p>This is your user Dashboard</p>

	        {
	        	this.state.favorites.map(lesson => {
		        	return(
		        		<div key={lesson._id}>
		        			<p>{lesson.title}</p>
		        			<p>{lesson.startTime}</p>
		        		</div>
		        	)
	        	})
	    	}
	        	
	        
	   
	    </div>)
	}
}
export default withRouter(Dashboard);



