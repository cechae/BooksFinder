import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
import { Card } from '@material-ui/core';

const defaultBookImg = "";
class BookList extends Component {
    render() {
        // process info here
        let isResultUndefined = this.props.data===undefined;
       
        return(
            <div className="list-container">
                <Box>
                { !isResultUndefined ?
                  <div className="wrapper">
                    {this.props.data.map((i, idx) => {
                        return (
                            <Card key={idx} className="card-container" >
                                <div className="title-box">
                                    <h2>{i.volumeInfo.title}</h2>
                                    <div className="small-desc">By: {i.volumeInfo.authors !== undefined ? i.volumeInfo.authors[0] : "Unknown"}</div>
                                    <div className="small-desc">Published by: {i.volumeInfo.publisher !== undefined ? i.volumeInfo.publisher : "Unknown"}</div>
                                    <div></div>
                                </div>
                                <img alt="book thumbnail" className="img-box" src={i.volumeInfo.imageLinks !== undefined ? i.volumeInfo.imageLinks.thumbnail : defaultBookImg}/>
                            </Card>
                        )
                    })}
                </div>
                :
                <div className="non-found">
                    <h1> Oops... No books found. Try other search. </h1>
                </div>}
                </Box>
            </div>
        )
    }
}
export default BookList;