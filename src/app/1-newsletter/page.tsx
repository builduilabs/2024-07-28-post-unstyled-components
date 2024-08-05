'use client';

import { FormEvent, useState } from 'react';
import { Spinner } from '../spinner';

export default function Page() {
  let [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setIsLoading(true);
    await signUp();
    setIsLoading(false);
  }

  return (
    <div className="max-w-lg mx-auto mt-8">
      <h1 className="text-2xl font-semibold">Sign up for our newsletter</h1>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
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
            className="group relative bg-amber-400 enabled:hover:bg-amber-300 disabled:bg-amber-500 rounded px-5 py-2 font-medium text-black"
            type="submit"
            disabled={isLoading}
          >
            {isLoading && (
              <div className="absolute inset-0 flex justify-center items-center">
                <Spinner />
              </div>
            )}
            <span className="group-disabled:invisible">Sign up</span>
          </button>
        </div>
      </form>
    </div>
  );
}

async function signUp() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
