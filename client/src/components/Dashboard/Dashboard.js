import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';
import API from '../../utils/API';
// import {
//   Card,
//   CardPrimaryAction,
//   CardMedia,
//   CardAction,
//   CardActions,
//   CardActionButtons,
//   CardActionIcons
// } from 'rmwc/Card';
// import { Grid, GridCell } from 'rmwc/Grid';
// import { Typography } from 'rmwc/Typography';
import './Dashboard.css';
import sanitize from '../Sanitize.js';


import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';


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
        <Grid container>
          <Grid item xs={12}>
            <h1>Hi {this.props.user.name}</h1>
            <h2>Here are your favorites</h2>
          </Grid>

          {
            this.state.favorites.map(lesson => {
              let {_id, classTimes, startDate, startTime, title, registerLink} = lesson;

              return(
                <Grid item xs={4}>
                

                
                    <Card key={lesson._id} className="classCard" tag="Link" to="/" theme="primary" stroked="true" >
                      <CardContent>
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
                      </CardContent>
                      <CardActions>

                          <Button onClick={() => this.openLessonPage(_id)}>See Details</Button>
                          <Button tag="a" href={registerLink} target="_blank">Register</Button>
             
                      </CardActions>
                    </Card>
                
                </Grid>
              )
            })
          }
        </Grid>
      </div>)
}
}
export default withRouter(Dashboard);



