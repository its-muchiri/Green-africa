import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      location: formData.get("location"),
      landSize: formData.get("landSize"),
      service: formData.get("service"),
      crops: formData.get("crops"),
      waterSource: formData.get("waterSource"),
      message: formData.get("message"),
    };

    // Validate required fields
    const requiredFields = ["name", "phone", "email", "location", "message"];
    for (const field of requiredFields) {
      if (!data[field as keyof typeof data]) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // In production, you would:
    // 1. Send email via SendGrid, Resend, or similar
    // 2. Store in database/CRM
    // 3. Send WhatsApp notification via Twilio or similar
    // 4. Send auto-reply to user

    console.log("Contact form submission:", data);

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return NextResponse.json(
      { 
        success: true, 
        message: "Request received. We'll respond within 24 hours." 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to process request. Please try again or WhatsApp us directly." },
      { status: 500 }
    );
  }
}