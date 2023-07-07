export const runtime = "edge";

import { Session } from "@zitadel/server";
import { listSessions, server } from "#/lib/zitadel";
import { getAllSessionIds } from "#/utils/cookies";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import SessionsList from "#/ui/SessionsList";

async function loadSessions(): Promise<Session[]> {
  const ids = await getAllSessionIds();

  if (ids && ids.length) {
    const response = await listSessions(
      server,
      ids.filter((id: string | undefined) => !!id)
    );
    return response?.sessions ?? [];
  } else {
    console.info("No session cookie found.");
    return [];
  }
}

export default async function Page() {
  let sessions = await loadSessions();

  return (
    <div className="flex flex-col items-center space-y-4">
      <h1>Accounts</h1>
      <p className="ztdl-p mb-6 block">Use your ZITADEL Account</p>

      <div className="flex flex-col w-full space-y-2">
        <SessionsList sessions={sessions} />
        <Link href="/loginname">
          <div className="flex flex-row items-center py-3 px-4 hover:bg-black/10 dark:hover:bg-white/10 rounded-md transition-all">
            <div className="w-8 h-8 mr-4 flex flex-row justify-center items-center rounded-full bg-black/5 dark:bg-white/5">
              <UserPlusIcon className="h-5 w-5" />
            </div>
            <span className="text-sm">Add another account</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
