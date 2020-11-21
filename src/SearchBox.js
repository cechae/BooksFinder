
import React,{ Component } from 'react';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';

export default class SearchBox extends Component {
    constructor(props){
        super(props);
        this.state={
            haha: 1
        }
    }
    componentDidMount(){
        document.getElementById("search-input-box").addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("search-button").click();
            }
        });
    }
    render() {
        return (
            <div>

                <Input 
                    id="search-input-box"
                    type="search" 
                    size='medium'
                    className="search" 
                    placeholder={this.props.placeholder}
                    onChange={this.props.handleChange}
                />
                <Button id="search-button" onClick={()=>this.props.handleSearchClick()} variant="contained" color="secondary">Search</Button>
            </div>
        )
    }
    
}