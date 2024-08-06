"use client";

import { ReactNode, useState } from "react";
import { Spinner } from "../spinner";

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
    <div className="mx-auto flex max-w-sm justify-center gap-4">
      <LoadingButton
        onClick={handleSignUp}
        loading={isSigningUp}
        className="rounded bg-amber-400 px-5 py-2 font-medium text-black enabled:hover:bg-amber-300 disabled:bg-amber-500"
      >
        Sign up
      </LoadingButton>

      <LoadingButton
        onClick={handleSendNow}
        loading={isSending}
        className="rounded bg-sky-400 px-5 py-2 text-sm font-semibold leading-6 text-white enabled:hover:bg-sky-500 disabled:bg-sky-500"
      >
        Send now
      </LoadingButton>
    </div>
  );
}

function LoadingButton({
  onClick,
  loading,
  className,
  children,
}: {
  onClick: () => void;
  loading: boolean;
  className: string;
  children: ReactNode;
}) {
  return (
    <button className={`${className} relative`} onClick={onClick}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </div>
      )}

      <span className={loading ? "invisible" : ""}>{children}</span>
    </button>
  );
}

async function sleep(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
