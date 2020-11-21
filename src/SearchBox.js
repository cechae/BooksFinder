
import React,{ Component } from 'react';

export default class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state={
            haha: 1
        }
    }
    render() {
        return (
            <input 
                type="search" 
                className="search" 
                placeholder={this.props.placeholder}
                onChange={this.props.handleChange}
            />
        )
    }
    
}