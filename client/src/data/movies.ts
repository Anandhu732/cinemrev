export interface Movie {
  id: string;
  title: string;
  poster: string;
  backdrop: string;
  rating: number;
  releaseYear: string;
  genre: string;
  duration: string;
  description: string;
  director: string;
  cast: string[];
  trailerUrl: string;
  reviews: Review[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Inception',
    poster: 'https://images.unsplash.com/photo-1489599611551-cc9b8cf3c8d1?w=400&h=600&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1489599611551-cc9b8cf3c8d1?w=1200&h=600&fit=crop',
    rating: 8.8,
    releaseYear: '2010',
    genre: 'Sci-Fi',
    duration: '148 min',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    director: 'Christopher Nolan',
    cast: ['Leonardo DiCaprio', 'Marion Cotillard', 'Tom Hardy'],
    trailerUrl: 'https://www.youtube.com/embed/YoHD9XEInc0',
    reviews: [
      {
        id: '1',
        author: 'John Doe',
        rating: 9,
        comment: 'Mind-bending masterpiece! Nolan at his finest.',
        date: '2023-12-01'
      }
    ]
  },
  {
    id: '2',
    title: 'The Dark Knight',
    poster: 'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=400&h=600&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=1200&h=600&fit=crop',
    rating: 9.0,
    releaseYear: '2008',
    genre: 'Action',
    duration: '152 min',
    description: 'When the menace known as The Joker emerges, Batman must accept one of the greatest psychological and physical tests.',
    director: 'Christopher Nolan',
    cast: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
    trailerUrl: 'https://www.youtube.com/embed/EXeTwQWrcwY',
    reviews: [
      {
        id: '2',
        author: 'Jane Smith',
        rating: 10,
        comment: 'Heath Ledger\'s performance is legendary. A perfect superhero film.',
        date: '2023-11-28'
      }
    ]
  },
  {
    id: '3',
    title: 'Interstellar',
    poster: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=600&fit=crop',
    rating: 8.6,
    releaseYear: '2014',
    genre: 'Drama',
    duration: '169 min',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
    trailerUrl: 'https://www.youtube.com/embed/zSWdZVtXT7E',
    reviews: []
  },
  {
    id: '4',
    title: 'Pulp Fiction',
    poster: 'https://images.unsplash.com/photo-1489599611551-cc9b8cf3c8d1?w=400&h=600&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1489599611551-cc9b8cf3c8d1?w=1200&h=600&fit=crop',
    rating: 8.9,
    releaseYear: '1994',
    genre: 'Crime',
    duration: '154 min',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.',
    director: 'Quentin Tarantino',
    cast: ['John Travolta', 'Uma Thurman', 'Samuel L. Jackson'],
    trailerUrl: 'https://www.youtube.com/embed/s7EdQ4FqbhY',
    reviews: []
  },
  {
    id: '5',
    title: 'The Matrix',
    poster: 'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=400&h=600&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=1200&h=600&fit=crop',
    rating: 8.7,
    releaseYear: '1999',
    genre: 'Sci-Fi',
    duration: '136 min',
    description: 'A computer programmer is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.',
    director: 'The Wachowskis',
    cast: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
    trailerUrl: 'https://www.youtube.com/embed/vKQi3bBA1y8',
    reviews: []
  },
  {
    id: '6',
    title: 'Parasite',
    poster: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=600&fit=crop',
    rating: 8.5,
    releaseYear: '2019',
    genre: 'Thriller',
    duration: '132 min',
    description: 'A poor family schemes to become employed by a wealthy family by infiltrating their household and posing as unrelated, highly qualified individuals.',
    director: 'Bong Joon-ho',
    cast: ['Song Kang-ho', 'Lee Sun-kyun', 'Cho Yeo-jeong'],
    trailerUrl: 'https://www.youtube.com/embed/5xH0HfJHsaY',
    reviews: []
  }
];

export const getMovieById = (id: string): Movie | undefined => {
  return movies.find(movie => movie.id === id);
};
