'use client';

import { FormEvent, useState } from 'react';
import { Spinner } from '../spinner';

export default function Page() {
  let [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
  }

  return (
    <div className="m-8">
      <form onSubmit={handleSubmit}>
        <button
          className="relative bg-blue-500 text-white font-medium px-4 py-2 rounded"
          type="submit"
        >
          {isLoading && (
            <span className="absolute inset-0 flex items-center justify-center">
              <Spinner className="text-white" />
            </span>
          )}

          <span className={isLoading ? 'invisible' : ''}>Save</span>
        </button>
      </form>
    </div>
  );
}
