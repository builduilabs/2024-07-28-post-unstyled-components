"use client";

import { ComponentProps, ReactNode, useState } from "react";
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
        type="submit"
        className="rounded bg-amber-400 px-5 py-2 font-medium text-black enabled:hover:bg-amber-300 disabled:grayscale"
      >
        Sign up
      </LoadingButton>

      <LoadingButton
        onClick={handleSendNow}
        loading={isSending}
        type="submit"
        className="rounded bg-sky-500 px-5 py-2 text-sm font-semibold text-white enabled:hover:bg-sky-600 disabled:grayscale"
      >
        Send now
      </LoadingButton>

      <LoadingButton
        onClick={handleCheckout}
        loading={isCheckingOut}
        type="submit"
        className="rounded-full border-2 border-emerald-500 bg-white px-5 py-2 text-sm font-bold text-emerald-600 enabled:hover:bg-emerald-50 disabled:grayscale"
      >
        Complete purchase
      </LoadingButton>
    </div>
  );
}

function LoadingButton({
  loading,
  children,
  className,
  ...rest
}: {
  loading: boolean;
  children: ReactNode;
  className: string;
} & ComponentProps<"button">) {
  return (
    <button {...rest} className={`${className} relative`} disabled={loading}>
      {loading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <Spinner />
        </span>
      )}

      <span className={loading ? "invisible" : ""}>{children}</span>
    </button>
  );
}

async function sleep(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}
