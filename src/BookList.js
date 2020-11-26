import React from 'react';
import Box from '@material-ui/core/Box';
import { Card } from '@material-ui/core';
import { Button } from '@material-ui/core';

const BookList = (props) => {
    let isResultUndefined = !props.data;
    return(
        <div className="list-container">
            {!props.isMounted ?
                <p className="loading-p">Loading<span></span></p>
                :
                <Box>
                    { !isResultUndefined ?
                    <div className="wrapper">
                        {props.data.map((i, idx) => {
                            return (
                                <Card key={idx} className="card-container" >
                                    <div className="title-box">
                                        <h2>{i.volumeInfo.title}</h2>
                                        <div className="small-desc">By: {i.volumeInfo.authors !== undefined ? i.volumeInfo.authors[0] : "Unknown"}</div>
                                        <div className="small-desc">Published by: {i.volumeInfo.publisher !== undefined ? i.volumeInfo.publisher : "Unknown"}</div>
                                        <div  className="small-desc button-div">
                                            <Button id="search-button" variant="contained" color="secondary">See this Book</Button>
                                        </div>
                                        
                                    </div>
                                    <img alt="book thumbnail" className="img-box" src={i.volumeInfo.imageLinks !== undefined ? i.volumeInfo.imageLinks.thumbnail : ""}/>
                                </Card>
                            )
                        })}
                    </div>
                    :
                    <div className="non-found">
                        <h1> Oops... No books found. Try other search. </h1>
                    </div>}
                </Box>
                }
        </div>
    )
}
export default BookList;