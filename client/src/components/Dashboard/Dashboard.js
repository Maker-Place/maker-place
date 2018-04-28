import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import API from '../../utils/API';
import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons,
  CardActionIcons
} from 'rmwc/Card';
import { Grid, GridCell } from 'rmwc/Grid';
import { Typography } from 'rmwc/Typography';
import './Dashboard.css';
import sanitize from '../Sanitize.js';

class Dashboard extends Component {
	constructor(props) {
      super(props);
      this.state = {
      	favorites: []
      };
    }

    getFavorites = () => {
    	console.log("getting favorites");
    	//this.props.user._id
    	// "5ae0d443de7ce7ddcbc53a2d"
    	API.getFavorites(this.props.user._id)
    	.then(response => {
    		let lessons = response.data;
    		console.log(lessons);
    		this.setState({favorites: lessons})
    	})
    	.catch(err => console.log(err));
    }

    componentDidMount() {
    	this.getFavorites();
    }
    openLessonPage = (lesson) => {
        console.log(lesson);
        let { history } = this.props;
        let path = `/lesson/${lesson}`;
        history.push(path);
    }

	render() {
	    return(
      <div>
        <Grid>
          <GridCell span="12">
            <h1>Hi {this.props.user.name}</h1>
            <h2>Here are your favorites</h2>
          </GridCell>

          {
            this.state.favorites.map(lesson => {
              let {_id, classTimes, startDate, startTime, title, registerLink} = lesson;

              return(
                <GridCell span="4">
                    <Card key={lesson._id} className="classCard" tag="Link" to="/" theme="primary" stroked="true" >
                      <div className="cardContent">
                        <Typography use="title" tag="h2" dangerouslySetInnerHTML={{__html: sanitize(title)}}></Typography>
                        <Typography
                          // use="subheading1"
                          tag="ul"
                          theme="text-secondary-on-background">
                          {classTimes.length ? (
                             classTimes.map(time => (<li>{time}</li>))
                          ) : 
                          (
                              <li>{startDate}, {startTime}</li>
                          )}
                        </Typography>                           
                      </div>
                      <CardActions>
                        <CardActionButtons>
                          <CardAction onClick={() => this.openLessonPage(_id)}>See Details</CardAction>
                          <CardAction tag="a" href={registerLink} target="_blank">Register</CardAction>
                        </CardActionButtons>
                      </CardActions>
                    </Card>
                </GridCell>
              )
            })
          }
        </Grid>
      </div>)
}
}
export default withRouter(Dashboard);



