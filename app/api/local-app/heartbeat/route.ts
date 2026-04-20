import { registerLocalAppHeartbeat } from "@/lib/local-app-runtime";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const enabled = registerLocalAppHeartbeat();

  return Response.json({
    ok: true,
    enabled,
  });
}
