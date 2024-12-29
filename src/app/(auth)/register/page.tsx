'use client';

import { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import { AuthLayout } from '@/components/layouts/AuthLayout';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement registration logic
  };

  return (
    <AuthLayout
      title="Create an account"
      subtitle="Start your freelancing journey"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          icon={User}
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
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
