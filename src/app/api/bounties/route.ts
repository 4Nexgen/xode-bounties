import { NextResponse } from "next/server";

export async function GET() {

  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/bounties", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch bounties");
    }

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error(errorMessage);
    return NextResponse.json(
      { error: "Failed to fetch bounties", details: errorMessage },
      { status: 500 }
    );
  }
}
