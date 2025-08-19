'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Calendar, Clock, User, Play, ArrowLeft, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import { getMovieById } from '@/data/movies';

export default function MovieDetail() {
  const params = useParams();
  const movieId = params.id as string;
  const movie = getMovieById(movieId);

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Movie Not Found</h1>
          <p className="text-gray-300 mb-8">The movie you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src={movie.backdrop}
            alt={movie.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        {/* Back Button */}
        <Link
          href="/"
          className="absolute top-24 left-4 z-10 bg-black/50 backdrop-blur-sm border border-white/20 rounded-full p-3 hover:bg-white/10 transition-all duration-300 text-white hover:text-blue-400"
        >
          <ArrowLeft className="w-6 h-6" />
        </Link>

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-7xl mx-auto px-4 pb-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-end">
              {/* Movie Poster */}
              <div className="lg:col-span-1">
                <div className="relative aspect-[2/3] max-w-sm mx-auto lg:mx-0">
                  <Image
                    src={movie.poster}
                    alt={movie.title}
                    fill
                    className="object-cover rounded-xl shadow-2xl"
                  />
                </div>
              </div>

              {/* Movie Info */}
              <div className="lg:col-span-2 text-center lg:text-left">
                <div className="mb-4">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    {movie.genre}
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  {movie.title}
                </h1>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mb-6 text-gray-300">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{movie.rating}/10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{movie.releaseYear}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{movie.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span>{movie.director}</span>
                  </div>
                </div>

                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed">
                  {movie.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href={`/movie/${movie.id}/review`}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    Add Review
                  </Link>
                  <button className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    Watch Trailer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Cast */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Cast</h2>
              <div className="space-y-4">
                {movie.cast.map((actor, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
                    <span className="text-white font-semibold">{actor}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trailer */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Trailer</h2>
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
                <iframe
                  src={movie.trailerUrl}
                  title={`${movie.title} Trailer`}
                  className="w-full h-full"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold text-white">Reviews</h2>
            <Link
              href={`/movie/${movie.id}/review`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
            >
              Write Review
            </Link>
          </div>

          {movie.reviews.length > 0 ? (
            <div className="space-y-6">
              {movie.reviews.map((review) => (
                <div key={review.id} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {review.author.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{review.author}</h4>
                        <p className="text-gray-400 text-sm">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{review.rating}/10</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <MessageSquare className="w-16 h-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No Reviews Yet</h3>
              <p className="text-gray-300 mb-6">Be the first to share your thoughts about this movie.</p>
              <Link
                href={`/movie/${movie.id}/review`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors inline-block"
              >
                Write First Review
              </Link>
            </div>
          )}
        </div>
      </section>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
