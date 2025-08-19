'use client';

import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowLeft, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';
import { getMovieById } from '@/data/movies';

export default function ReviewPage() {
  const params = useParams();
  const router = useRouter();
  const movieId = params.id as string;
  const movie = getMovieById(movieId);

  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [review, setReview] = useState('');
  const [authorName, setAuthorName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the review to your backend
    console.log({
      movieId,
      rating,
      review,
      authorName,
      date: new Date().toISOString().split('T')[0]
    });

    // Redirect back to movie page
    router.push(`/movie/${movieId}`);
  };

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Movie Not Found</h1>
          <p className="text-gray-300 mb-8">The movie you&apos;re trying to review doesn&apos;t exist.</p>
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
      <main className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href={`/movie/${movieId}`}
            className="bg-white/10 border border-white/20 rounded-full p-3 hover:bg-white/20 transition-colors text-white hover:text-blue-400"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-white">Write a Review</h1>
            <p className="text-gray-300 text-lg">Share your thoughts about &quot;{movie.title}&quot;</p>
          </div>
        </div>

        {/* Movie Info Card */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-24 h-36 bg-gray-700 rounded-lg overflow-hidden relative">
              <Image
                src={movie.poster}
                alt={movie.title}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{movie.title}</h2>
              <div className="flex items-center gap-4 text-gray-300">
                <span>{movie.releaseYear}</span>
                <span>•</span>
                <span>{movie.genre}</span>
                <span>•</span>
                <span>{movie.duration}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white font-semibold">{movie.rating}/10</span>
              </div>
            </div>
          </div>
        </div>

        {/* Review Form */}
        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-xl p-8">
          {/* Name Input */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-white font-semibold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Rating */}
          <div className="mb-6">
            <label className="block text-white font-semibold mb-4">
              Your Rating
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
                <button
                  key={star}
                  type="button"
                  className="group"
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  onClick={() => setRating(star)}
                >
                  <Star
                    className={`w-8 h-8 transition-all duration-200 ${
                      star <= (hoveredRating || rating)
                        ? 'text-yellow-400 fill-current scale-110'
                        : 'text-gray-600 hover:text-yellow-400'
                    }`}
                  />
                </button>
              ))}
              <span className="ml-4 text-2xl font-bold text-white">
                {rating > 0 ? `${rating}/10` : ''}
              </span>
            </div>
          </div>

          {/* Review Text */}
          <div className="mb-8">
            <label htmlFor="review" className="block text-white font-semibold mb-2">
              Your Review
            </label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              rows={6}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              placeholder="Share your thoughts about this movie..."
              required
            />
            <p className="text-gray-400 text-sm mt-2">
              {review.length}/500 characters
            </p>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <Link
              href={`/movie/${movieId}`}
              className="border-2 border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={!rating || !review.trim() || !authorName.trim()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Submit Review
            </button>
          </div>
        </form>

        {/* Existing Reviews */}
        {movie.reviews.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-white mb-6">Other Reviews</h3>
            <div className="space-y-6">
              {movie.reviews.map((existingReview) => (
                <div
                  key={existingReview.id}
                  className="bg-white/5 border border-white/10 rounded-xl p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">
                          {existingReview.author.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{existingReview.author}</h4>
                        <p className="text-gray-400 text-sm">{existingReview.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white font-semibold">{existingReview.rating}/10</span>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{existingReview.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </main>
      <BottomNav />
    </>
  );
}
