'use client';

import { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { AuthLayout } from '@/components/layouts/AuthLayout';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
  };

  return (
    <AuthLayout title="Welcome back" subtitle="Sign in to your account">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          icon={Mail}
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          icon={Lock}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
        Don't have an account?{' '}
        <Link
          href="/register"
          className="text-primary-600 hover:text-primary-500"
        >
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
}
