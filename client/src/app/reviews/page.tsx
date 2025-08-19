'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, Filter, Star, Calendar } from 'lucide-react';
import MovieCard from '@/components/MovieCard';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import { movies } from '@/data/movies';

export default function ReviewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [sortBy, setSortBy] = useState('rating');

  const genres = ['All', 'Action', 'Sci-Fi', 'Drama', 'Crime', 'Thriller'];

  const filteredMovies = movies
    .filter(movie => {
      const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = selectedGenre === 'All' || movie.genre === selectedGenre;
      return matchesSearch && matchesGenre;
    })
    .sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'year') return parseInt(b.releaseYear) - parseInt(a.releaseYear);
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Movie Reviews
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover what critics and audiences are saying about the latest films
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>

            {/* Genre Filter */}
            <div className="relative">
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre} className="bg-gray-800">
                    {genre}
                  </option>
                ))}
              </select>
              <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>

            {/* Sort By */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
              >
                <option value="rating" className="bg-gray-800">Highest Rated</option>
                <option value="year" className="bg-gray-800">Newest</option>
                <option value="title" className="bg-gray-800">A-Z</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-gray-300">
            Showing {filteredMovies.length} movie{filteredMovies.length !== 1 ? 's' : ''}
          </p>

          <div className="flex items-center gap-2 text-gray-300">
            <span>Sort by:</span>
            <span className="text-blue-400 font-semibold">
              {sortBy === 'rating' ? 'Highest Rated' :
               sortBy === 'year' ? 'Newest' : 'A-Z'}
            </span>
          </div>
        </div>

        {/* Movies Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster}
                rating={movie.rating}
                releaseYear={movie.releaseYear}
                genre={movie.genre}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No Movies Found</h3>
            <p className="text-gray-300 mb-6">
              Try adjusting your search criteria or browse all movies.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedGenre('All');
                setSortBy('rating');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Featured Reviews Section */}
        <section className="mt-20">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            Latest Reviews
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {movies.slice(0, 2).map((movie) => (
              <div key={movie.id} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-colors">
                <div className="flex">
                  <div className="w-32 h-48 relative">
                    <Image
                      src={movie.poster}
                      alt={movie.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs font-medium">
                        {movie.genre}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white font-semibold">{movie.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{movie.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {movie.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Calendar className="w-4 h-4" />
                        <span>{movie.releaseYear}</span>
                      </div>
                      <Link
                        href={`/movie/${movie.id}`}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Read Reviews
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        </div>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
