import React, { Component } from 'react';
import './App.css';
import MovieList from './MovieList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 'Maleficent',
          image: 'https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1565363492/amc-cdn/production/2/movies/53700/53730/PosterDynamic/87999.jpg',
          title: 'Maleficent',
          rating: 3
        },
        {
          id: 'Scary Stories',
          image: "http://fr.web.img6.acsta.net/c_215_290/pictures/19/07/24/11/24/3992643.jpg",
          title: 'Scary Stories',
          rating: 5
        },
        {
          id: 'Drive',
          image: "https://m.media-amazon.com/images/M/MV5BYTZmOTY1MDAtOTYxOC00YTQ1LTlkNDUtMmJiZDEyYmE1YmRmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_UY268_CR16,0,182,268_AL_.jpg",
          title: 'Drive',
          rating: 2
    
        },
        {
          id: 'El Cilencio Del Viento',
          image: "https://www.promenadesfilms.com/medias/promenadesfilms/Cartel%20El%20Silencio%20del%20Viento.jpg",
          title: 'El Cilencio Del Viento',
          rating: 1
    
        },
        {
          id: 'SArtemis Fowl',
          image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Artemis_Fowl_poster.jpg/220px-Artemis_Fowl_poster.jpg",
          title: 'SArtemis Fowl',
          rating: 4
    
        },
        {
          id: 'Valerian',
          image: "https://media.services.cinergy.ch/media/box1600/2adad8d68850dd65b02425ea64c3c758955f22f6.jpg",
          title: 'Valerian',
          rating: 3
        }
      ],
      isLoading: true

    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({isLoading: false}), 3000)
  }
  
  render(){

    return (
      <div className="App">
      <MovieList list = {this.state.list} isLoading = {this.state.isLoading}/>
    </div>
  );
}
}

export default App;
