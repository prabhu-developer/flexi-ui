import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { JobList } from './components/JobList';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <Categories />
      <JobList />
    </div>
  );
}

export default App;