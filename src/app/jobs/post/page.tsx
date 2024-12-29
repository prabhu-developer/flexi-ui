'use client'

import { useState } from 'react'
import { JobPostForm } from '@/components/jobs/JobPostForm'
import { JobPreview } from '@/components/jobs/JobPreview'

export default function PostJobPage() {
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    budget: '',
    type: 'full-time',
    location: '',
    skills: [] as string[],
    experience: 'intermediate'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement job posting logic
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Post a Job</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <JobPostForm jobData={jobData} setJobData={setJobData} onSubmit={handleSubmit} />
        <JobPreview jobData={jobData} />
      </div>
    </div>
  )
}