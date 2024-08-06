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
    <div className="max-w-sm mx-auto">
      <div className="bg-white rounded-lg shadow p-4 text-center">
        <h1 className="text-2xl font-semibold">Invoice #142</h1>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col">
          <p className="mt-3 text-sm">{`You're about to send an invoice for $300.`}</p>

          <div className="mt-8 flex justify-end gap-2">
            <button
              type="button"
              className="group relative text-sm enabled:hover:bg-sky-50 rounded px-5 py-2 font-medium text-sky-500"
            >
              <span className="group-disabled:invisible">Cancel</span>
            </button>
            <button
              className="group relative text-sm bg-sky-400 enabled:hover:bg-sky-500 disabled:bg-sky-500 rounded px-5 py-2 font-semibold text-white leading-6"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : 'Send now'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

async function signUp() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
