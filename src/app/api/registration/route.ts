import { NextResponse } from "next/server";

// Backend abstraction — ready for real DB integration.
// Currently logs and returns success so the frontend can complete the flow
// without pretending data is persisted in a production database.

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Basic server-side validation
    const required = ["fullName", "email", "phone", "profession", "institution", "city", "registrationType"];
    for (const f of required) {
      if (!body[f] || String(body[f]).trim() === "") {
        return NextResponse.json({ error: `Missing field: ${f}` }, { status: 400 });
      }
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // In production, persist to DB / send email / etc here.
    // TODO: integrate with database (e.g., Prisma, Supabase, etc.)
    console.log("[GCEL registration]", {
      ...body,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, message: "Registration received" }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
