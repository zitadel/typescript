"use client";
import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

export default function Theme() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === "dark";
  return (
    <Switch
      checked={isDark}
      onChange={(checked) => setTheme(checked ? "dark" : "light")}
      className={`${
        isDark
          ? "!bg-gray-800 dark:bg-background-dark-400"
          : "!bg-gray-100 dark:bg-background-dark-400"
      }
      relative inline-flex h-4 w-9 items-center rounded-full`}
    >
      <span className="sr-only">Dark mode enabled</span>
      <div
        aria-hidden="true"
        className={`${
          isDark ? "translate-x-5" : "translate-x-0"
        } flex flex-row items-center justify-center h-4 w-4 transform rounded-full bg-white transition-all shadow dark:bg-background-dark-500 ring-1 ring-gray-200 dark:ring-gray-800 ring-offset-1 ring-offset-white dark:ring-offset-background-dark-500`}
      >
        {isDark ? (
          <MoonIcon className="dark:text-amber-500 h-4 w-4" />
        ) : (
          <SunIcon className="text-amber-500 h-4 w-4" />
        )}
      </div>
    </Switch>
  );
}
