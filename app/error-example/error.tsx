"use client";

import { useEffect } from "react";

export default function ErrorExampleFallbackUI(
{
  error,
  reset,
}:
{
  error: Error & { digest?: string };
  reset: () => void;
})
 {
  useEffect(() => {
    //sent a report to your error logging service
  }, [error]);

  return (
    <div>
      <p className="text-red-600">{error?.message || "An error occured"}</p>
    </div>
  );
}
