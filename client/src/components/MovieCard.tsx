'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Calendar } from 'lucide-react';

interface MovieCardProps {
  id: string;
  title: string;
  poster: string;
  rating: number;
  releaseYear: string;
  genre: string;
}

const MovieCard = ({ id, title, poster, rating, releaseYear, genre }: MovieCardProps) => {
  return (
    <Link href={`/movie/${id}`} className="group block">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={poster}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Rating Badge */}
          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current" />
            <span className="text-white text-xs font-medium">{rating}</span>
          </div>
        </div>

        <div className="p-4">
          <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>

          <div className="flex items-center justify-between text-sm text-gray-300">
            <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-md text-xs">
              {genre}
            </span>
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{releaseYear}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
