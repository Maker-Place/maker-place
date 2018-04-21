import React, { Component } from 'react';
import './ToolList.css';
import API  from '../../utils/API.js';


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
            <div>
              {tools.map(tool => {
                return (
                  <div>
                    <div>
                      <h3>{tool.category}</h3>
                      <h3>{tool.tool_type}</h3>
                      <h3>{tool.tool_name}</h3>
                    </div>
                  </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  };
};

export default ToolList;