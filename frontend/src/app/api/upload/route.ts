import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = "http://127.0.0.1:8001";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!file || !(file instanceof File)) {
      return NextResponse.json(
        { error: "No file provided" },
        { status: 400 }
      );
    }

    const backendFormData = new FormData();
    backendFormData.append("file", file);

    const response = await fetch(`${BACKEND_URL}/upload`, {
      method: "POST",
      body: backendFormData,
    });

    const data = await response.json();
    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error("Upload proxy error:", error);
    return NextResponse.json(
      { error: "Failed to connect to backend" },
      { status: 502 }
    );
  }
}
