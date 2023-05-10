"use client";

import { useRouter } from "next/navigation";
import React from "react";

const GlobalError = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

  return (
    <html>
      <body>
        <>
          <div className="flex flex-col justify-center items-center h-[70vh] gap-y-10 ">
            <h1 className="text-5xl font-bold">Something went wrong!</h1>
            <div className="flex gap-x-5">
              <button
                onClick={() => router.push("/")}
                className="py-2 px-4 border-[1px] border-black rounded-md text-lg hover:bg-black hover:text-white hover:border-white transition-all"
              >
                Home
              </button>
              <button
                onClick={() => reset()}
                className="py-2 px-4 border-[1px] border-black rounded-md text-lg hover:bg-black hover:text-white hover:border-white transition-all"
              >
                Try Again
              </button>
            </div>
          </div>
        </>
      </body>
    </html>
  );
};

export default GlobalError;
