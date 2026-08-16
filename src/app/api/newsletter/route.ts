import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const email = formData.get("email");

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // In production, you would:
    // 1. Add to mailing list (Mailchimp, ConvertKit, Buttondown, etc.)
    // 2. Send welcome email
    // 3. Store in database

    console.log("Newsletter signup:", email);

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 300));

    return NextResponse.json(
      { 
        success: true, 
        message: "Subscribed! Check your inbox for a confirmation." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}