import { Job } from '@/types/jobs'
import { Clock, DollarSign, MapPin, Briefcase } from 'lucide-react'
import Link from 'next/link'

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            <Link href={`/jobs/${job.id}`} className="hover:text-primary-600 dark:hover:text-primary-400">
              {job.title}
            </Link>
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{job.description}</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <Briefcase className="w-4 h-4" />
              {job.type}
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {job.location}
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4" />
              {job.budget}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {job.timePosted}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}