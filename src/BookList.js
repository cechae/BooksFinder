import React,{Component} from 'react';
import Box from '@material-ui/core/Box';
import { Card,  CardHeader } from '@material-ui/core';

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
                                <CardHeader className="title-box" title={i.volumeInfo.title} />
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