import React from 'react';
import Box from '@material-ui/core/Box';
import { Card } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Book from './Book';
import {
    Link
  } from "react-router-dom";

const BookList = (props) => {
    let isResultUndefined = !props.data; // caught error from Promise OR when no book's returned from the search term.
    return(
        <div className="list-container">
            {!props.isMounted ? // when unmounted (= waiting for data) display Loading...
                <p className="loading-p">Loading<span></span></p>
                :
                <Box>
                    { !isResultUndefined ?
                    <div className="wrapper">
                        {props.data.map((i, idx) => {
                            console.log(idx)
                            return (
                                <Card key={idx} className="card-container" >
                                    <div className="title-box">
                                        <h2>{i.volumeInfo.title}</h2>
                                        <div className="small-desc">By: {i.volumeInfo.authors ? i.volumeInfo.authors[0] : "Unknown"}</div>
                                        <div className="small-desc">Published by: {i.volumeInfo.publisher ? i.volumeInfo.publisher : "Unknown"}</div>
                                        <div  className="small-desc button-div">
                                            <Link to={`/book/${idx}`}>
                                                <Button id="search-button" variant="contained" color="secondary" onClick={()=>props.seeDetail(i, idx)}>See This Book</Button>
                                            </Link>
                                        </div>
                                        
                                    </div>
                                    <img alt="book thumbnail" className="img-box" src={i.volumeInfo.imageLinks ? i.volumeInfo.imageLinks.thumbnail : ""}/>
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