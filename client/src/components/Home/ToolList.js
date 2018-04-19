import React, { Component } from 'react';
import {
    List,
    SimpleListItem
} from 'rmwc/List';

import './ToolList.scss';

export default class ToolList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    getTools () {
        return [
            {
                name: 'Hammer',
                icon: 'star_border',
                description: 'A thing to hit nails with'
            },
            {
                name: 'Saw',
                icon: 'attach_file',
                description: 'A thing to saw wood with' 
            },
            {
                name: 'Wrench',
                icon: 'build',
                description: 'Something to turn with'
            }
        ]
    }

    render () {
        let {open} = this.state;
        let method = `render${open ? 'Open' : 'Closed'}`;
        return this[method]();
    }

    renderClosed () {
        return this.renderToggleButton({text: 'Open Tools'});
    }

    renderOpen () {
        let tools = this.getTools().map(({name, icon, description})=> {
            // https://jamesmfriedman.github.io/rmwc/lists
            return (
                <SimpleListItem 
                    graphic={icon}
                    text={name}
                    secondaryText={description} 
                    meta="info" 
                />
            );
        })

        let button = this.renderToggleButton({text: 'Close Tools'});

        return (
            <div>
                {button}
                <List>
                    {tools}
                </List>
            </div>
        );
    }

    renderToggleButton = ({text})=> {
        let toggle = ()=> {
            let {open} = this.state;
            open = !open;
            this.setState({open});
        }

        return (
            <button onClick={toggle}>
                {text}
            </button>
        );
    }
}