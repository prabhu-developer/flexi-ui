'use client';

import { Menu, Search, User } from 'lucide-react';
import { ThemeSwitch } from './theme-switch';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-primary-600 dark:text-primary-400"
            >
              FreeLancer
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Find Work
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              Browse Freelancers
            </a>
            <a
              href="#"
              className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
            >
              How it Works
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
              <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <ThemeSwitch />
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full md:hidden transition-colors">
              <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <Link
              href="/login"
              className="hidden md:flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
