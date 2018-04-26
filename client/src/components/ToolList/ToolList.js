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
      craftCollapse:false,
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

        const wood = this.state.tools.filter((item)=> item.category == 'Wood');
        this.setState({wood:wood}, function(){console.log('wood after set ', this.state.wood);});
        const metal = this.state.tools.filter((item)=> item.category == 'Metal');
        this.setState({metal:metal}, function(){console.log('metal after set ', this.state.metal);});
        const craft = this.state.tools.filter((item)=> item.category == 'Craft');
        this.setState({craft:craft}, function(){console.log('craft after set ', this.state.craft);});

      })
        .catch(err => console.log(err));
    }

    toggle(type) {
      
      this.setState({ [type]: !this.state[type] });
    }


  renderToolGroup = ({title, toggleAttr, toolsAttr})=> {
    let isOpen = this.state[toggleAttr];
    let tools = this.state[toolsAttr];

    return (
      <div className="col-4">
        <Button
          color="dark" 
          size="lrg" 
          onClick={()=>{this.toggle(toggleAttr)}} 
          style={{
            marginTop: '10px',
            marginBottom: '3rem',
            marginLeft: '10px'
          }}
        >
          <h3>{title}</h3>
        </Button>
        <Collapse isOpen={isOpen}>
          {tools.map(tool => {
            return (
              <div style={{marginLeft: '10px'}}>
                  <div>
                    <p>{tool.tool_name}</p>
                  </div>
              </div>
              )
            })
          }
        </Collapse>
      </div>
    );
  }

  render() {

    let tools = this.state.tools;

    let toolGroups = [
      {
        title: 'Wood Tools',
        toggleAttr: 'woodCollapse',
        toolsAttr: 'wood'
      },
      {
        title: 'Metal Tools',
        toggleAttr: 'metalCollapse',
        toolsAttr: 'metal'
      },
      {
        title: 'Craft Tools',
        toggleAttr: 'craftCollapse',
        toolsAttr: 'craft'
       }
    ].map(this.renderToolGroup);

   // I had Tools Below div className
   return(
      <div className="toollist-page">
        <div className="toollist-image">
          <div className="toollist-text">
            <div className="toollist-header">
              <div className="toollist-title">
               
              </div>
            </div>
            
            {/* add wrapper for grouping cards together */}

            
            <div className="row">
              {toolGroups}

{/*
              <div className="col-4">
              <Button color="dark" size="lrg" onClick={()=>{this.toggle('metalCollapse')}} style={{ marginBottom: '3rem' }}><h3>Metals Tools</h3></Button>
            <Collapse isOpen={this.state.metalCollapse}>
              {this.state.metal.map(tool => {
                return (
                  <div>
                      <div>
                      <p>{tool.tool_name}</p>
                      </div>

                  </div>
                  )
                })
              }
              </Collapse>          
            </div>
            <div className="col-4">
            <Button color="dark" size="lrg" onClick={()=>{this.toggle('craftCollapse')}} style={{ marginBottom: '3rem' }}><h3>Craft Tools</h3></Button>
          <Collapse isOpen={this.state.craftCollapse}>
            {this.state.craft.map(tool => {
              return (
                <div>
                  
                    <div>
                      <p>{tool.tool_name}</p>
                    </div>
                  
                </div>
                )
              })
            }
            </Collapse>          
          </div>
          */}

            </div>
          </div>
        </div>
      </div>
    )
  };
};


export default ToolList;

// below is the former structure
// <div>
//                       <p>category {tool.category}</p>
//                       <p>type {tool.tool_type}</p>
//                       <p>toolname {tool.tool_name}</p>
//                     </div>
                  