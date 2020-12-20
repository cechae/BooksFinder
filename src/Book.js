

import React from 'react';

function Book(props) {
    let bookInfo = null;
    console.log(props.detail)
    if (props.detail) {
        bookInfo = props.detail.volumeInfo;
        //console.log(bookInfo)

    }
    return (
        bookInfo? 
        (<div>
            <div className="flex-container">
                <div className="flex-left">
                    <img alt="book thumbnail" className="img-box" src={bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : ""}/>
                </div>
                <div className="flex-right">
                    <div className="title-box">
                        <h1>{bookInfo.title}</h1>
                        <p><b>By:</b> {bookInfo.authors ? bookInfo.authors.map((i, idx) => {
                            console.log(idx)
                            if (idx === bookInfo.authors.length-1){
                                return (`${i}`);
                            }
                            else return (`${i}, `);
                        }) : "Unknown"}</p>
                        <p><b>Published By:</b> {bookInfo.publisher ? bookInfo.publisher : "Unknown"} </p>
                        <p>{bookInfo.description}</p>
                    </div>
                </div>
            </div>
       
        </div>)
        : (
            <div>
               <h1> No book found </h1>
            </div>
        )
    );
}
export default Book;