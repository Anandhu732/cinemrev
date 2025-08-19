'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Bell, Lock, Palette, Save } from 'lucide-react';
import Navbar from '@/components/Navbar';
import BottomNav from '@/components/BottomNav';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: {
      emailUpdates: true,
      reviewNotifications: true,
      movieRecommendations: false,
    },
    privacy: {
      profileVisibility: 'public',
      showReviews: true,
      showRatings: true,
    },
    appearance: {
      theme: 'dark',
      language: 'English',
    },
  });

  const handleSave = () => {
    // Here you would save to backend
    console.log('Settings saved:', settings);
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
            href="/profile"
            className="bg-white/10 border border-white/20 rounded-full p-3 hover:bg-white/20 transition-colors text-white hover:text-blue-400"
          >
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-white">Settings</h1>
            <p className="text-gray-300">Customize your CinemRev experience</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Notifications */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Bell className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Notifications</h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">Email Updates</h3>
                  <p className="text-gray-400 text-sm">Receive updates about new features and movies</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications.emailUpdates}
                    onChange={(e) => setSettings({
                      ...settings,
                      notifications: {
                        ...settings.notifications,
                        emailUpdates: e.target.checked
                      }
                    })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">Review Notifications</h3>
                  <p className="text-gray-400 text-sm">Get notified when someone reviews movies you&apos;ve rated</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications.reviewNotifications}
                    onChange={(e) => setSettings({
                      ...settings,
                      notifications: {
                        ...settings.notifications,
                        reviewNotifications: e.target.checked
                      }
                    })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">Movie Recommendations</h3>
                  <p className="text-gray-400 text-sm">Receive personalized movie recommendations</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.notifications.movieRecommendations}
                    onChange={(e) => setSettings({
                      ...settings,
                      notifications: {
                        ...settings.notifications,
                        movieRecommendations: e.target.checked
                      }
                    })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-6 h-6 text-green-400" />
              <h2 className="text-2xl font-bold text-white">Privacy</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Profile Visibility</h3>
                <select
                  value={settings.privacy.profileVisibility}
                  onChange={(e) => setSettings({
                    ...settings,
                    privacy: {
                      ...settings.privacy,
                      profileVisibility: e.target.value
                    }
                  })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="public" className="bg-gray-800">Public</option>
                  <option value="friends" className="bg-gray-800">Friends Only</option>
                  <option value="private" className="bg-gray-800">Private</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">Show Reviews</h3>
                  <p className="text-gray-400 text-sm">Allow others to see your reviews</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.privacy.showReviews}
                    onChange={(e) => setSettings({
                      ...settings,
                      privacy: {
                        ...settings.privacy,
                        showReviews: e.target.checked
                      }
                    })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">Show Ratings</h3>
                  <p className="text-gray-400 text-sm">Allow others to see your movie ratings</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.privacy.showRatings}
                    onChange={(e) => setSettings({
                      ...settings,
                      privacy: {
                        ...settings.privacy,
                        showRatings: e.target.checked
                      }
                    })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Palette className="w-6 h-6 text-purple-400" />
              <h2 className="text-2xl font-bold text-white">Appearance</h2>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Theme</h3>
                <select
                  value={settings.appearance.theme}
                  onChange={(e) => setSettings({
                    ...settings,
                    appearance: {
                      ...settings.appearance,
                      theme: e.target.value
                    }
                  })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="dark" className="bg-gray-800">Dark</option>
                  <option value="light" className="bg-gray-800">Light</option>
                  <option value="auto" className="bg-gray-800">Auto</option>
                </select>
              </div>

              <div>
                <h3 className="text-white font-semibold mb-2">Language</h3>
                <select
                  value={settings.appearance.language}
                  onChange={(e) => setSettings({
                    ...settings,
                    appearance: {
                      ...settings.appearance,
                      language: e.target.value
                    }
                  })}
                  className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="English" className="bg-gray-800">English</option>
                  <option value="Spanish" className="bg-gray-800">Spanish</option>
                  <option value="French" className="bg-gray-800">French</option>
                  <option value="German" className="bg-gray-800">German</option>
                </select>
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end gap-4">
            <Link
              href="/profile"
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Cancel
            </Link>
            <button
              onClick={handleSave}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <Save className="w-5 h-5" />
              Save Settings
            </button>
          </div>
        </div>
      </div>
        </div>
      </main>
      <BottomNav />
    </>
  );
}
