import React from 'react';
import MovieCard from './MovieCard'
import HOC from './HOC'
import { Container } from 'react-bootstrap'

const MovieList = (props) => {
  
        return (
            <Container className="d-flex flex-row justify-content-start">
                <div className="movie-list">
                    {props.list.map((el, index) => <MovieCard key={index} info={el} />)}
                </div>
               

            </Container>
        )
    }

export default HOC(MovieList)