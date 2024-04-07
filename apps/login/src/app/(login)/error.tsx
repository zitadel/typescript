"use client";

import { Boundary } from "@/ui/Boundary";
import { Button } from "@/ui/Button";

export default function Error(props: {
  error: Error | null;
  reset: () => void;
}) {
  return (
    <Boundary labels={["Login Error"]} color="red">
      <div className="space-y-4">
        <div className="text-sm text-red-500 dark:text-red-500">
          <strong className="font-bold">Error:</strong> {props.error?.message}
        </div>
        <div>
          <Button onClick={props.reset}>Try Again</Button>
        </div>
      </div>
    </Boundary>
  );
}
