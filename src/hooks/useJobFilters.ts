import { useState, useEffect } from 'react';
import { Job, JobFilters } from '@/types/jobs';

const MOCK_JOBS: Job[] = [
  {
    id: 1,
    title: 'Senior React Developer',
    description: 'Looking for an experienced React developer...',
    type: 'full-time',
    location: 'Remote',
    budget: '$5,000 - $7,000',
    timePosted: '2 hours ago',
    skills: ['React', 'TypeScript', 'Next.js'],
    experience: 'expert',
  },
  {
    id: 2,
    title: 'Frontend Developer (React)',
    description:
      'We are seeking a highly skilled frontend developer with expertise in React.js to join our dynamic team.',
    type: 'full-time',
    location: 'Remote',
    budget: '$4,500 - $6,000',
    timePosted: '1 day ago',
    skills: ['React', 'JavaScript', 'CSS', 'HTML'],
    experience: 'mid-level',
  },
  {
    id: 3,
    title: 'React Native Developer',
    description:
      'Join our team to build high-quality mobile applications using React Native. You will be responsible for the full mobile app lifecycle.',
    type: 'contract',
    location: 'Remote',
    budget: '$6,000 - $8,000',
    timePosted: '3 days ago',
    skills: ['React Native', 'JavaScript', 'Redux'],
    experience: 'senior',
  },
  {
    id: 4,
    title: 'Full Stack Developer (React & Node.js)',
    description:
      'We are looking for a full-stack developer experienced in React and Node.js to build scalable web applications.',
    type: 'full-time',
    location: 'New York, NY',
    budget: '$7,000 - $9,000',
    timePosted: '4 days ago',
    skills: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
    experience: 'expert',
  },
  {
    id: 5,
    title: 'React Developer (Freelance)',
    description:
      'Freelance React Developer needed for a 3-month project to help build a complex web app. Flexible hours.',
    type: 'freelance',
    location: 'Remote',
    budget: '$3,000 - $5,000',
    timePosted: '5 days ago',
    skills: ['React', 'JavaScript', 'Redux'],
    experience: 'mid-level',
  },
  {
    id: 6,
    title: 'Senior Frontend Engineer (React)',
    description:
      'Seeking an experienced Senior Frontend Engineer to lead the development of our core product using React.js.',
    type: 'full-time',
    location: 'Remote',
    budget: '$8,000 - $10,000',
    timePosted: '1 week ago',
    skills: ['React', 'GraphQL', 'TypeScript', 'CSS', 'HTML'],
    experience: 'senior',
  },
  {
    id: 7,
    title: 'React UI Engineer',
    description:
      'Looking for a talented UI Engineer with a passion for creating beautiful user interfaces using React.',
    type: 'contract',
    location: 'San Francisco, CA',
    budget: '$5,000 - $7,500',
    timePosted: '2 weeks ago',
    skills: ['React', 'CSS', 'UI Design', 'JavaScript'],
    experience: 'mid-level',
  },
  {
    id: 8,
    title: 'React.js Engineer (Startup)',
    description:
      'We are a fast-growing startup looking for a React.js Engineer to help build the next big thing in tech.',
    type: 'full-time',
    location: 'Remote',
    budget: '$4,000 - $6,000',
    timePosted: '2 weeks ago',
    skills: ['React', 'JavaScript', 'Node.js'],
    experience: 'mid-level',
  },
  {
    id: 9,
    title: 'Senior React Developer (E-Commerce)',
    description:
      'Seeking a Senior React Developer to help build a large-scale e-commerce platform. Experience with performance optimization is a must.',
    type: 'full-time',
    location: 'Los Angeles, CA',
    budget: '$8,000 - $12,000',
    timePosted: '3 weeks ago',
    skills: ['React', 'Redux', 'JavaScript', 'E-Commerce'],
    experience: 'expert',
  },
  {
    id: 10,
    title: 'React Frontend Developer (Remote)',
    description:
      'We are looking for a React Developer to build cutting-edge frontend features for a highly interactive application.',
    type: 'full-time',
    location: 'Remote',
    budget: '$4,500 - $6,500',
    timePosted: '4 weeks ago',
    skills: ['React', 'TypeScript', 'Redux', 'JavaScript'],
    experience: 'mid-level',
  },
  {
    id: 11,
    title: 'React Developer for Data Dashboard',
    description:
      'Join our team to work on a data dashboard that visualizes real-time data, using React and D3.js.',
    type: 'contract',
    location: 'Remote',
    budget: '$5,500 - $7,500',
    timePosted: '1 month ago',
    skills: ['React', 'D3.js', 'JavaScript', 'Data Visualization'],
    experience: 'senior',
  },
  {
    id: 12,
    title: 'Junior React Developer',
    description:
      'Looking for an entry-level React Developer to join our fast-paced development team and learn from experienced engineers.',
    type: 'full-time',
    location: 'Austin, TX',
    budget: '$3,000 - $4,500',
    timePosted: '1 month ago',
    skills: ['React', 'JavaScript', 'HTML', 'CSS'],
    experience: 'junior',
  },
];

export function useJobFilters() {
  const [filters, setFilters] = useState<JobFilters>({
    search: '',
    type: '',
    experience: '',
    location: '',
    minBudget: '',
    maxBudget: '',
  });

  const [filteredJobs, setFilteredJobs] = useState<Job[]>(MOCK_JOBS);

  const updateFilter = (key: keyof JobFilters, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    let result = MOCK_JOBS;

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(
        (job) =>
          job.title.toLowerCase().includes(searchLower) ||
          job.description.toLowerCase().includes(searchLower)
      );
    }

    if (filters.type) {
      result = result.filter((job) => job.type === filters.type);
    }

    if (filters.experience) {
      result = result.filter((job) => job.experience === filters.experience);
    }

    if (filters.location) {
      const locationLower = filters.location.toLowerCase();
      result = result.filter((job) =>
        job.location.toLowerCase().includes(locationLower)
      );
    }

    setFilteredJobs(result);
  }, [filters]);

  return {
    filters,
    jobs: filteredJobs,
    updateFilter,
  };
}
