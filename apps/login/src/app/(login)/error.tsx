"use client";

import { Boundary } from "@/ui/Boundary";
import { Button } from "@/ui/Button";
<<<<<<< HEAD

export default function Error(props: {
  error: Error | null;
  reset: () => void;
}) {
=======
import React from "react";

export default function Error({ error, reset }: any) {
  React.useEffect(() => {
    console.log("logging error:", error);
  }, [error]);

>>>>>>> main
  return (
    <Boundary labels={["Login Error"]} color="red">
      <div className="space-y-4">
        <div className="text-sm text-red-500 dark:text-red-500">
<<<<<<< HEAD
          <strong className="font-bold">Error:</strong> {props.error?.message}
        </div>
        <div>
          <Button onClick={props.reset}>Try Again</Button>
=======
          <strong className="font-bold">Error:</strong> {error?.message}
        </div>
        <div>
          <Button onClick={() => reset()}>Try Again</Button>
>>>>>>> main
        </div>
      </div>
    </Boundary>
  );
}
