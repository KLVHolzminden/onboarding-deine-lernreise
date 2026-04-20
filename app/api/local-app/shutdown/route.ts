import { registerLocalAppShutdown } from "@/lib/local-app-runtime";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST() {
  const enabled = registerLocalAppShutdown();

  return Response.json({
    ok: true,
    enabled,
  });
}
