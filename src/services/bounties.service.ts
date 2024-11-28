import { Bounty } from "@/models/bounty.interface";

export async function getBounties(): Promise<Bounty[]> {
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
    return data;
  } catch (err) {
    console.error("Error fetching bounties:", err || "Something went wrong");
    return [];
  }
}
