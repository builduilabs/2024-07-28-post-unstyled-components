'use client';

import { useFormStatus } from 'react-dom';
import { Spinner } from '../spinner';
import { ReactNode } from 'react';

export default function Page() {
  async function handleSignup(formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl font-semibold">Sign up for our newsletter</h1>

      <form action={handleSignup} className="mt-4 flex flex-col">
        <label className="text-sm" htmlFor="email">
          Email
        </label>
        <input
          className="mt-1 px-2 py-1 border rounded border-gray-300"
          type="email"
          placeholder="you@acme.com"
          name="email"
          id="email"
        />

        <div className="mt-4">
          <button
            className="bg-amber-400 enabled:hover:bg-amber-300 disabled:bg-amber-500 rounded px-5 py-2 font-medium text-black"
            type="submit"
          >
            <Loading>Sign up</Loading>
          </button>
        </div>
      </form>
    </div>
  );
}

function Loading({ children }: { children: ReactNode }) {
  let { pending } = useFormStatus();

  return (
    <span className="inline-flex items-center justify-center relative">
      {pending && (
        <div className="absolute inset-0 flex justify-center items-center">
          <Spinner />
        </div>
      )}
      <span className={pending ? 'invisible' : ''}>{children}</span>
    </span>
  );
}
