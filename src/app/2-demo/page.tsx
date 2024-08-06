"use client";

import { FormEvent, useState } from "react";
import { Spinner } from "../spinner";

export default function Page() {
  let [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setIsLoading(true);
    await signUp();
    setIsLoading(false);
  }

  return (
    <div className="mx-auto max-w-sm">
      <div className="rounded-lg bg-white p-4 text-center shadow">
        <h1 className="text-2xl font-semibold">Invoice #142</h1>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col">
          <p className="mt-3 text-sm">{`You're about to send an invoice for $300.`}</p>

          <div className="mt-8 flex justify-end gap-2">
            <button
              type="button"
              className="group relative rounded px-5 py-2 text-sm font-medium text-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 enabled:hover:bg-sky-50"
            >
              <span className="group-disabled:invisible">Cancel</span>
            </button>
            <button
              className="group relative rounded bg-sky-400 px-5 py-2 text-sm font-semibold text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 enabled:hover:bg-sky-500 disabled:bg-sky-500"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? <Spinner /> : "Send now"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

async function signUp() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
