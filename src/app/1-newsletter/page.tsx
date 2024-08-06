"use client";

import { FormEvent, useState } from "react";
import { Spinner } from "../spinner";

export default function Page() {
  let [isLoading, setIsLoading] = useState(true);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setIsLoading(true);
    await signUp();
    setIsLoading(false);
  }

  return (
    <div className="mx-auto max-w-lg">
      <h1 className="text-2xl font-semibold">Sign up for our newsletter</h1>

      <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
        <label className="text-sm" htmlFor="email">
          Email
        </label>
        <input
          className="mt-1 rounded border border-gray-300 px-2 py-1 focus:outline-amber-400"
          type="email"
          placeholder="you@acme.com"
          name="email"
          id="email"
        />

        <div className="mt-4">
          <button
            className="group relative rounded bg-amber-400 px-5 py-2 font-medium text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400 enabled:hover:bg-amber-300 disabled:bg-amber-500"
            type="submit"
            disabled={isLoading}
          >
            {isLoading && (
              <span className="absolute inset-0 flex items-center justify-center">
                <Spinner />
              </span>
            )}
            <span className="group-disabled:invisible">Sign up</span>
          </button>
        </div>
      </form>
    </div>
  );
}

async function signUp() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
}
