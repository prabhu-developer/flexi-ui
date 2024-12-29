import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'
import { JobFormData } from '@/types/jobs'

interface JobPostFormProps {
  jobData: JobFormData
  setJobData: (data: JobFormData) => void
  onSubmit: (e: React.FormEvent) => void
}

export function JobPostForm({ jobData, setJobData, onSubmit }: JobPostFormProps) {
  const handleSkillInput = (value: string) => {
    if (value.endsWith(',')) {
      const skill = value.slice(0, -1).trim()
      if (skill && !jobData.skills.includes(skill)) {
        setJobData({ ...jobData, skills: [...jobData.skills, skill] })
      }
      return ''
    }
    return value
  }

  return (
    <form onSubmit={onSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <div className="space-y-6">
        <Input
          label="Job Title"
          value={jobData.title}
          onChange={(e) => setJobData({ ...jobData, title: e.target.value })}
          placeholder="e.g. Senior React Developer"
          required
        />

        <Textarea
          label="Job Description"
          value={jobData.description}
          onChange={(e) => setJobData({ ...jobData, description: e.target.value })}
          placeholder="Describe the job requirements and responsibilities"
          rows={6}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Budget"
            value={jobData.budget}
            onChange={(e) => setJobData({ ...jobData, budget: e.target.value })}
            placeholder="e.g. $1,000 - $2,000"
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Job Type
            </label>
            <select
              value={jobData.type}
              onChange={(e) => setJobData({ ...jobData, type: e.target.value })}
              className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
            >
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="freelance">Freelance</option>
            </select>
          </div>
        </div>

        <Input
          label="Location"
          value={jobData.location}
          onChange={(e) => setJobData({ ...jobData, location: e.target.value })}
          placeholder="e.g. Remote, New York, London"
          required
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Required Skills
          </label>
          <div className="flex flex-wrap gap-2 mb-2">
            {jobData.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => setJobData({
                    ...jobData,
                    skills: jobData.skills.filter((s) => s !== skill)
                  })}
                  className="ml-2"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
          <Input
            placeholder="Add skills (comma separated)"
            onChange={(e) => {
              const result = handleSkillInput(e.target.value)
              if (result !== undefined) {
                e.target.value = result
              }
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Experience Level
          </label>
          <select
            value={jobData.experience}
            onChange={(e) => setJobData({ ...jobData, experience: e.target.value })}
            className="block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2"
          >
            <option value="entry">Entry Level</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        <Button type="submit" className="w-full">Post Job</Button>
      </div>
    </form>
  )
}