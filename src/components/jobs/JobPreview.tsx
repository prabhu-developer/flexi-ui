import { JobFormData } from '@/types/jobs'
import { Clock, MapPin, Briefcase } from 'lucide-react'

interface JobPreviewProps {
  jobData: JobFormData
}

export function JobPreview({ jobData }: JobPreviewProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow sticky top-8">
      <h2 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Preview</h2>
      
      {jobData.title && (
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
          {jobData.title}
        </h3>
      )}

      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
        {jobData.type && (
          <div className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            {jobData.type}
          </div>
        )}
        {jobData.location && (
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {jobData.location}
          </div>
        )}
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          Just now
        </div>
      </div>

      {jobData.description && (
        <div className="mb-6">
          <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Description</h4>
          <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
            {jobData.description}
          </p>
        </div>
      )}

      {jobData.skills.length > 0 && (
        <div>
          <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Required Skills</h4>
          <div className="flex flex-wrap gap-2">
            {jobData.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}