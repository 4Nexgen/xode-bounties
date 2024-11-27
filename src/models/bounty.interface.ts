export type Category = "Substrate" | "Smart Contract (Ink)"| "Node JS (PAPI/PolkadotJS)";

export interface Bounty {
  _id?: string;
  date: string;
  category: Category;
  title: string;
  description: string;
  specification: string;
  bounty_price: string;
  status: string;
  github_issue_url: string;
}
