'use client';

import { ReactNode, useState } from 'react';
import { Spinner } from '../spinner';

export default function Page() {
  let [isSigningUp, setIsSigningUp] = useState(false);
  let [isSending, setIsSending] = useState(false);
  let [isCheckingOut, setIsCheckingOut] = useState(false);

  async function handleSignUp() {
    setIsSigningUp(true);
    await sleep(1000);
    setIsSigningUp(false);
  }

  async function handleSendNow() {
    setIsSending(true);
    await sleep(1000);
    setIsSending(false);
  }

  async function handleCheckout() {
    setIsCheckingOut(true);
    await sleep(1000);
    setIsCheckingOut(false);
  }

  return (
    <div className="max-w-md mx-auto flex gap-4 justify-center">
      <LoadingButton
        onClick={handleSignUp}
        loading={isSigningUp}
        className="bg-amber-400 hover:bg-amber-300 rounded px-5 py-2 font-medium text-black"
      >
        Sign up
      </LoadingButton>

      <LoadingButton
        onClick={handleSendNow}
        loading={isSending}
        className="text-sm bg-sky-500 hover:bg-sky-500 rounded px-5 py-2 font-semibold text-white"
      >
        Send now
      </LoadingButton>

      <LoadingButton
        onClick={handleCheckout}
        loading={isCheckingOut}
        className="text-sm bg-emerald-500 hover:bg-emerald-600 rounded px-5 py-2 font-semibold text-white"
      >
        Complete purchase
      </LoadingButton>
    </div>
  );
}

function LoadingButton({
  loading,
  className,
  onClick,
  children,
}: {
  loading: boolean;
  className: string;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button className={`relative ${className}`} onClick={onClick}>
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
