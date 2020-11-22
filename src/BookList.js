import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
import { Card } from '@material-ui/core';

class BookList extends Component {
    render() {
        // process info here
        
        console.log(this.props.data)
        return(
            <div className="list-container">
                <Box>
                <div className="wrapper">
                    {this.props.data.map((i, idx) => {
                        return (
                            <Card key={idx} className="card-container" >
                                <div className="title-box">
                                    <h2>{i.volumeInfo.title}</h2>
                                    <div className="small-desc">By: {i.volumeInfo.authors[0]}</div>
                                    <div className="small-desc">Published by: {i.volumeInfo.publisher}</div>
                                </div>
                                <img alt="book thumbnail" className="img-box" src={i.volumeInfo.imageLinks.thumbnail}/>
                            </Card>
                        )
                    })}
                </div>
                </Box>
            </div>
        )
    }
}
export default BookList;