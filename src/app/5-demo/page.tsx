'use client';

import { ReactNode, useState } from 'react';
import { Spinner } from '../spinner';

export default function Page() {
  let [isSigningUp, setIsSigningUp] = useState(false);
  let [isSending, setIsSending] = useState(false);

  return (
    <div className="max-w-sm mx-auto flex gap-4 justify-center">
      <LoadingButton
        loading={isSigningUp}
        className="bg-amber-400 enabled:hover:bg-amber-300 disabled:bg-amber-500 rounded px-5 py-2 font-medium text-black"
      >
        Sign up
      </LoadingButton>

      <LoadingButton
        loading={isSending}
        className="text-sm bg-sky-400 enabled:hover:bg-sky-500 disabled:bg-sky-500 rounded px-5 py-2 font-semibold text-white leading-6"
      >
        Send now
      </LoadingButton>
    </div>
  );
}

function LoadingButton({
  loading,
  className,
  children,
}: {
  loading: boolean;
  className: string;
  children: ReactNode;
}) {
  return (
    <button className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex justify-center items-center">
          <Spinner />
        </div>
      )}

      <span className={loading ? 'invisible' : ''}>{children}</span>
    </button>
  );
}

async function sleep(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
