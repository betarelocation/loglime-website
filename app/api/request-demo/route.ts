import { NextResponse } from "next/server";
import { z } from "zod";
import { sendDemoRequestEmail } from "@/lib/email/smtp";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const requestDemoSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(254),
  restaurantType: z.string().trim().min(1, "Restaurant type is required").max(100)
});

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request data." }, { status: 400 });
  }

  const parsed = requestDemoSchema.safeParse(payload);

  if (!parsed.success) {
    const errorMessage = parsed.error.issues[0]?.message || "Invalid input data.";
    return NextResponse.json({ message: errorMessage }, { status: 400 });
  }

  const { name, email, restaurantType } = parsed.data;

  try {
    await sendDemoRequestEmail({ name, email, restaurantType });
    return NextResponse.json({ message: "Thank you! Your demo request has been received." });
  } catch (error) {
    if (error instanceof Error && error.message === "SMTP_NOT_CONFIGURED") {
      return NextResponse.json(
        { message: "Email setup is pending. Please add SMTP settings and try again." },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { message: "We could not submit your request right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
