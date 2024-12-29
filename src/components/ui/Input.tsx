import { LucideIcon } from 'lucide-react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon
  label?: string
  error?: string | undefined // Add error prop to handle validation errors
}

export function Input({ icon: Icon, label, error, className = '', ...props }: InputProps) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" />
          </div>
        )}
        <input
          className={`
            block w-full rounded-lg border ${error ? 'border-red-500' : 'border-gray-300'} dark:${error ? 'border-red-500' : 'border-gray-600'}
            bg-white dark:bg-gray-700 
            text-gray-900 dark:text-white
            focus:ring-2 focus:ring-primary-500 focus:border-primary-500
            dark:focus:ring-primary-500 dark:focus:border-primary-500
            ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-2
            placeholder:text-gray-500 dark:placeholder:text-gray-400
            ${className}
          `}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>} {/* Display error message */}
    </div>
  )
}
