'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Play, TrendingUp, Users, Award } from 'lucide-react';
import MovieCard from '@/components/MovieCard';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import { movies } from '@/data/movies';

export default function HomePage() {
  const featuredMovies = movies.slice(0, 4);
  const trendingMovies = movies.slice(2, 6);

  return (
    <>
      <Navbar />
      <BottomNav />
      <main className="pt-16">
        <div className="min-h-screen">
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="https://images.unsplash.com/photo-1489599611551-cc9b8cf3c8d1?w=1920&h=1080&fit=crop"
                alt="Cinema background"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                Discover
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                  Great Movies
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Welcome to your personalized movie hub. Explore reviews, rate films, and share your cinematic journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/reviews"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <Play className="w-5 h-5" />
                  Explore Reviews
                </Link>
                <Link
                  href="/profile"
                  className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  My Profile
                </Link>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-black/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="group">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <Users className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-3xl font-bold text-white mb-2">50K+</h3>
                    <p className="text-gray-300">Active Users</p>
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform fill-current" />
                    <h3 className="text-3xl font-bold text-white mb-2">100K+</h3>
                    <p className="text-gray-300">Movie Reviews</p>
                  </div>
                </div>
                <div className="group">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                    <Award className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-3xl font-bold text-white mb-2">25K+</h3>
                    <p className="text-gray-300">Movies Rated</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Movies Section */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Featured Movies
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Discover the most talked-about films of the season
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredMovies.map((movie) => (
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
            </div>
          </section>

          {/* Trending Section */}
          <section className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center gap-3">
                    <TrendingUp className="w-10 h-10 text-blue-400" />
                    Trending Now
                  </h2>
                  <p className="text-xl text-gray-300">
                    What everyone&apos;s watching this week
                  </p>
                </div>
                <Link
                  href="/reviews"
                  className="hidden md:block bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  View All
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {trendingMovies.map((movie) => (
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
            </div>
          </section>

          {/* Personal Recommendations */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Recommended For You
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Based on your viewing history and preferences
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {movies.slice(4, 8).map((movie) => (
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
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
