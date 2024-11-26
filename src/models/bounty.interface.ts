export type Category = "pallet" | "wasm smart contract";

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
