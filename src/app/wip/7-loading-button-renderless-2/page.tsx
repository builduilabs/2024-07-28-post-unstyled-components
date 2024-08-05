'use client';

import { ComponentProps, FormEvent, ReactNode, useState } from 'react';
import { Spinner as SpinnerIcon } from '../spinner';

export default function Page() {
  let [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
  }

  return (
    <div className="m-8">
      <form onSubmit={handleSubmit}>
        <button
          className="bg-black text-white font-medium px-4 py-2 rounded"
          type="submit"
        >
          <Spinner loading={isSubmitting}>Sign up</Spinner>
        </button>
      </form>
    </div>
  );
}

function Spinner({
  loading = false,
  children,
}: {
  loading: boolean;
  children: ReactNode;
}) {
  return (
    <span className="relative">
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <SpinnerIcon className="text-white" />
        </span>
      )}

      <span className={loading ? 'invisible' : ''}>{children}</span>
    </span>
  );
}
