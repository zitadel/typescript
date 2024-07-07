import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json(
    {
      instance_id: process.env.ZITADEL_INSTANCE_ID,
      api_url: process.env.ZITADEL_API_URL,
    },
    { status: 200 },
  );
}
