import React, { Component } from 'react';
import './ToolList.scss';

class ToolList extends Component {

state = {
  tools: []
}

componentDidMount() {
  this.getTools();
}

getTools = () => {
  API.getTools()
  .then(response => {
  let tools = response.data;
    this.setState({tools: tools})
    console.log(tools);
  })
    .catch(err => console.log(err));
}

    <div className="container">
      <div className="panel-group" id="accordionMenu" role="tablist" aria-multiselectable="true">
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingOne">
            <h4 className="panel-title">
            <a role="button" data-toggle="collapse" data-parent="#accordionMenu" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Menu 0
            </a>
          </h4>
          </div>
          <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
            <div className="panel-body">
              <ul className="nav">
                <li><a href="#">item 1</a></li>
                <li><a href="#">item 2</a></li>
                <li><a href="#">item 3</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingTwo">
            <h4 className="panel-title">
            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordionMenu" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Menu 1
            </a>
          </h4>
          </div>
          <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
            <div className="panel-body">
              <ul className="nav">
                <li><a href="#">item 1</a></li>
                <li><a href="#">item 2</a></li>
                <li><a href="#">item 3</a></li>
                <li><a href="#">item 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingThree">
            <h4 className="panel-title">
            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordionMenu" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Menu 2
            </a>
          </h4>
          </div>
          <div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
            <div className="panel-body">
              <ul className="nav">
                <li><a href="#">item 1</a></li>
                <li><a href="#">item 2</a></li>
                <li><a href="#">item 3</a></li>
                <li><a href="#">item 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        
        <div className="panel panel-default">
          <div className="panel-heading" role="tab" id="headingFour">
            <h4 className="panel-title">
            <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordionMenu" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              Menu 3
            </a>
          </h4>
          </div>
          <div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
            <div className="panel-body">
              <ul className="nav">
                <li><a href="#">item 1</a></li>
                <li><a href="#">item 2</a></li>
              </ul>
            </div>
          </div>
        </div>   
      </div>
    </div>

    render () {
        let {open} = this.state;
        let method = `render${open ? 'Open' : 'Closed'}`;
        return this[method]();
    }



    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         open: false
    //     };
    // }

    // getTools () {
    //     return [
    //         {
    //             name: 'Hammer',
    //             icon: 'star_border',
    //             description: 'A thing to hit nails with'
    //         },
    //         {
    //             name: 'Saw',
    //             icon: 'attach_file',
    //             description: 'A thing to saw wood with' 
    //         },
    //         {
    //             name: 'Wrench',
    //             icon: 'build',
    //             description: 'Something to turn with'
    //         }
    //     ]
    // }

    // render () {
    //     let {open} = this.state;
    //     let method = `render${open ? 'Open' : 'Closed'}`;
    //     return this[method]();
    // }

    // renderClosed () {
    //     return this.renderToggleButton({text: 'Open Tools'});
    // }

    // renderOpen () {
    //     let tools = this.getTools().map(({name, icon, description})=> {
    //         // https://jamesmfriedman.github.io/rmwc/lists
    //         return (
    //             <SimpleListItem 
    //                 graphic={icon}
    //                 text={name}
    //                 secondaryText={description} 
    //                 meta="info" 
    //             />
    //         );
    //     })

    //     let button = this.renderToggleButton({text: 'Close Tools'});

    //     return (
    //         <div>
    //             {button}
    //             <List>
    //                 {tools}
    //             </List>
    //         </div>
    //     );
    // }

    // renderToggleButton = ({text})=> {
    //     let toggle = ()=> {
    //         let {open} = this.state;
    //         open = !open;
    //         this.setState({open});
    //     }

    //     return (
    //         <button onClick={toggle}>
    //             {text}
    //         </button>
    //     );
    // }
};

export default ToolList;
