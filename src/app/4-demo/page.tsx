'use client';

import { ReactNode, useState } from 'react';
import { Spinner } from '../spinner';

export default function Page() {
  let [isSigningUp, setIsSigningUp] = useState(false);
  let [isSending, setIsSending] = useState(false);

  return (
    <div className="max-w-sm mx-auto flex gap-4 justify-center">
      <LoadingButton loading={isSigningUp}>Sign up</LoadingButton>

      <LoadingButton loading={isSending}>Send now</LoadingButton>
    </div>
  );
}

function LoadingButton({
  loading,
  children,
}: {
  loading: boolean;
  children: ReactNode;
}) {
  return (
    <button className="relative">
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
