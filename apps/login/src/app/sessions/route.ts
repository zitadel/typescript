import { listSessions } from "@/lib/zitadel";
import { getAllSessions } from "@zitadel/next";
import { Session } from "@zitadel/proto/zitadel/session/v2/session_pb";
import { NextRequest, NextResponse } from "next/server";

async function loadSessions(host: string, ids: string[]): Promise<Session[]> {
  const response = await listSessions(
    host,
    ids.filter((id: string | undefined) => !!id),
  );

  return response?.sessions ?? [];
}

export async function GET(request: NextRequest) {
  const sessionCookies = await getAllSessions();
  const ids = sessionCookies.map((s) => s.id);
  let sessions: Session[] = [];
  if (ids && ids.length) {
    sessions = await loadSessions(request.nextUrl.host, ids);
  }

  const responseHeaders = new Headers();
  responseHeaders.set("Access-Control-Allow-Origin", "*");
  responseHeaders.set("Access-Control-Allow-Headers", "*");

  return NextResponse.json(
    { sessions },
    { status: 200, headers: responseHeaders },
  );
}
