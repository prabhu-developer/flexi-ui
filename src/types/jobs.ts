export interface Job {
  id: number
  title: string
  description: string
  type: string
  location: string
  budget: string
  timePosted: string
  skills: string[]
  experience: string
}

export interface JobFormData {
  title: string
  description: string
  budget: string
  type: string
  location: string
  skills: string[]
  experience: string
}

export interface JobFilters {
  search: string
  type: string
  experience: string
  location: string
  minBudget: string
  maxBudget: string
}