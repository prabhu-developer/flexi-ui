'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Mail, Lock, User } from 'lucide-react';
import { AuthLayout } from '@/components/layouts/AuthLayout';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

// Define your validation schema with Yup
const schema = yup.object({
  name: yup.string().required('Full name is required'),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
}).required();

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    // Handle the form submission logic
    console.log('Form Data:', data);
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Start your freelancing journey"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Input
            icon={User}
            type="text"
            placeholder="Full name"
            {...register('name')}
            required
            error={errors?.name?.message}
          />
        </div>
        <div>
          <Input
            icon={Mail}
            type="email"
            placeholder="Email address"
            {...register('email')}
            required
            error={errors?.email?.message}
          />
        </div>
        <div>
          <Input
            icon={Lock}
            type="password"
            placeholder="Password"
            {...register('password')}
            required
            error={errors?.password?.message}
          />
        </div>
        <Button type="submit" className="w-full">
          Create account
        </Button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Already have an account?{' '}
        <Link href="/login" className="text-primary-600 hover:text-primary-500">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  );
}
