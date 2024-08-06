'use client';

import { ComponentProps, ReactNode, useState } from 'react';
import { Spinner } from '../spinner';

export default function Page() {
  let [isSigningUp, setIsSigningUp] = useState(false);
  let [isSending, setIsSending] = useState(false);

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

  return (
    <div className="max-w-sm mx-auto flex gap-4 justify-center">
      <Button color="yellow" loading={isSigningUp} onClick={handleSignUp}>
        Sign up
      </Button>
      <Button color="blue" loading={isSending} onClick={handleSendNow}>
        Send now
      </Button>
    </div>
  );
}

function Button({
  color,
  loading = false,
  onClick,
  children,
}: {
  color: 'yellow' | 'blue';
  loading?: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  let classNames = {
    yellow:
      'group relative bg-amber-400 enabled:hover:bg-amber-300 disabled:bg-amber-500 rounded px-5 py-2 font-medium text-black',
    blue: 'group relative text-sm bg-sky-400 enabled:hover:bg-sky-500 disabled:bg-sky-500 rounded px-5 py-2 font-semibold text-white leading-6',
  };

  return (
    <button className={classNames[color]} onClick={onClick}>
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
