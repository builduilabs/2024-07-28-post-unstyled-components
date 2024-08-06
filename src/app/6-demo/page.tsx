"use client";

import { ReactNode, useState } from "react";
import { Spinner } from "../spinner";

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
    <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
      <LoadingButton
        onClick={handleSignUp}
        loading={isSigningUp}
        className="rounded bg-amber-400 px-5 py-2 font-medium text-black hover:bg-amber-300"
      >
        Sign up
      </LoadingButton>

      <LoadingButton
        onClick={handleSendNow}
        loading={isSending}
        className="rounded bg-sky-500 px-5 py-2 text-sm font-semibold text-white hover:bg-sky-500"
      >
        Send now
      </LoadingButton>

      <LoadingButton
        onClick={handleCheckout}
        loading={isCheckingOut}
        className="rounded-full border-2 border-emerald-500 bg-white px-5 py-2 text-sm font-bold text-emerald-600 hover:bg-emerald-50"
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
