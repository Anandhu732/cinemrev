'use client';

import { useState } from 'react';
import Link from 'next/link';
import { User, Calendar, Star, Edit3, Settings, ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: '2023-01-15',
    bio: 'Movie enthusiast and critic. Love exploring different genres and sharing my thoughts on cinema.',
    favoriteGenres: ['Action', 'Sci-Fi', 'Thriller'],
    reviewsCount: 42,
    averageRating: 7.8
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would save to backend
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link
            href="/"
            className="bg-white/10 border border-white/20 rounded-full p-3 hover:bg-white/20 transition-colors text-white hover:text-blue-400"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-white">Profile</h1>
            <p className="text-gray-300">Manage your account and preferences</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Personal Information</h2>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
                >
                  <Edit3 className="w-4 h-4" />
                  {isEditing ? 'Cancel' : 'Edit'}
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-white font-semibold mb-2">Name</label>
                  {isEditing ? (
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => setProfile({...profile, name: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-300 text-lg">{profile.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Email</label>
                  {isEditing ? (
                    <input
                      type="email"
                      value={profile.email}
                      onChange={(e) => setProfile({...profile, email: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-300 text-lg">{profile.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Bio</label>
                  {isEditing ? (
                    <textarea
                      value={profile.bio}
                      onChange={(e) => setProfile({...profile, bio: e.target.value})}
                      className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      rows={4}
                    />
                  ) : (
                    <p className="text-gray-300 leading-relaxed">{profile.bio}</p>
                  )}
                </div>

                <div>
                  <label className="block text-white font-semibold mb-2">Favorite Genres</label>
                  <div className="flex flex-wrap gap-2">
                    {profile.favoriteGenres.map((genre, index) => (
                      <span
                        key={index}
                        className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex gap-4 pt-4">
                    <button
                      onClick={handleSave}
                      className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            {/* Profile Avatar */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{profile.name}</h3>
              <div className="flex items-center justify-center gap-2 text-gray-300 mb-4">
                <Calendar className="w-4 h-4" />
                <span>Joined {new Date(profile.joinDate).toLocaleDateString()}</span>
              </div>
              <Link
                href="/settings"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Settings
              </Link>
            </div>

            {/* Stats */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Statistics</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Reviews Written</span>
                  <span className="text-white font-bold text-xl">{profile.reviewsCount}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Average Rating</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-white font-bold text-xl">{profile.averageRating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  href="/reviews"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  Browse Movies
                </Link>
                <Link
                  href="/"
                  className="block w-full border border-white/30 hover:bg-white/10 text-white text-center px-4 py-3 rounded-lg font-semibold transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
