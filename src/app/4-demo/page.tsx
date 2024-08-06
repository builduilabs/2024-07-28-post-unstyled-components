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
      <LoadingButton loading={isSigningUp} onClick={handleSignUp}>
        Sign up
      </LoadingButton>

      <LoadingButton loading={isSending} onClick={handleSendNow}>
        Send now
      </LoadingButton>
    </div>
  );
}

function LoadingButton({
  onClick,
  loading,
  children,
}: {
  onClick: () => void;
  loading: boolean;
  children: ReactNode;
}) {
  return (
    <button onClick={onClick} className="relative">
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
