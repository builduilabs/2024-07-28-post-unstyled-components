'use client';

import { ComponentProps, FormEvent, ReactNode, useState } from 'react';
import { Spinner } from '../spinner';

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
        <LoadingButton
          loading={isSubmitting}
          className="bg-black text-white disabled:opacity-50 font-medium px-4 py-2 rounded"
          type="submit"
        >
          Sign up
        </LoadingButton>
      </form>
    </div>
  );
}

function LoadingButton({
  loading = false,
  children,
  ...rest
}: {
  loading: boolean;
  children: ReactNode;
} & ComponentProps<'button'>) {
  return (
    <button {...rest} disabled={loading}>
      <span className="relative">
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <Spinner className="text-white" />
          </span>
        )}

        <span className={loading ? 'invisible' : ''}>{children}</span>
      </span>
    </button>
  );
}
