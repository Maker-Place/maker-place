import React, { Component } from 'react';
import './ToolList.css';
import API  from '../../utils/API.js';
import { Collapse, Button, CardBody, Card } from 'reactstrap';


class ToolList extends Component {
    constructor(props) {
      super(props);
      this.toggle = this.toggle.bind(this);
    }
    state = {
      tools: [],
      woodCollapse:false,//    this.state = { collapse: false };
      metalCollapse:false,
      wood:[],
      metal:[],
      craft:[]
    }

    componentDidMount() {
      this.getTools();
      console.log("state ******** ",this.state);
 
    }

    getTools = () => {
      API.getTools()
      .then(response => {
      let tools = response.data;
        this.setState({tools: tools})
        console.log(tools);
        const wood = this.state.tools.filter((item)=> item.category == 'Wood');
        this.setState({wood:wood}, function(){console.log('wood after set ', this.state.wood);});
        const metal = this.state.tools.filter((item)=> item.category == 'Metal');
        this.setState({metal:metal}, function(){console.log('metal after set ', this.state.metal);});
      })
        .catch(err => console.log(err));
    }

    toggle(type) {
      
      this.setState({ [type]: !this.state[type] });
    }

  render() {

    let tools = this.state.tools;
   
   return(
      <div className="toollist-page">
        <div className="toollist-image">
          <div className="toollist-text">
            <div className="toollist-header">
              <div className="toollist-title">
                Tools
              </div>
            </div>
            {/* add wrapper for grouping cards together */}
            
            <div className="row">
            <div className="col-4">
            <Button color="primary" onClick={()=>{this.toggle('woodCollapse')}} style={{ marginBottom: '1rem' }}>Wood Tools</Button>
            <Collapse isOpen={this.state.woodCollapse}>
              {this.state.wood.map(tool => {
                return (
                  <div>
                    
                      <div>
                        <h3>category {tool.category}</h3>
                        <h3>type {tool.tool_type}</h3>
                        <h3>toolname {tool.tool_name}</h3>
                      </div>
                    
                  </div>
                  )
                })
              }
              </Collapse>
              </div>
              <div className="col-4">
              <Button color="primary" onClick={()=>{this.toggle('metalCollapse')}} style={{ marginBottom: '1rem' }}>Metals Tools</Button>
            <Collapse isOpen={this.state.metalCollapse}>
              {this.state.metal.map(tool => {
                return (
                  <div>
                    
                      <div>
                        <h3>category {tool.category}</h3>
                        <h3>type {tool.tool_type}</h3>
                        <h3>toolname {tool.tool_name}</h3>
                      </div>
                    
                  </div>
                  )
                })
              }
              </Collapse>
            
            </div>
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default ToolList;