import React from 'react'
import { Card } from 'react-bootstrap'
const MovieCard = (props) => {

    return (
        <div className="movie-card">
            <Card className="card" style={{ width: '215px' }}>
                <Card.Img variant="top" src={props.info.image} style={{ width: '215px', height: '290px' }} />
                <Card.Body>
                    <Card.Title>{props.info.title}</Card.Title>
                   

                </Card.Body>
            </Card>
        </div>
    )
}
export default MovieCard