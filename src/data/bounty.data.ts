import { Bounty } from "@/models/bounty.interface";

export const bounty_sample_data: Bounty[] = [
  {
    _id: "1",
    date: "2024-11-21",
    category: "Substrate",
    title: "Enhancement: CRUD pallet_aura::Athorities enhancement",
    description:
      "We must modify the pallet_aura::Authorities entries through an extrinsic. This allows us to add new authorities, remove existing ones, and update the current list of authorities at specific block intervals. \
      Preferred Solution: CRUD operations → xode_consensus::Candidates → hooks (block interval) → pallet_aura::Authorities.\
        Use the pallet_xode-consensus as the working pallet for the extrinsic to modify the pallet_aura::Authorities. Additionally, implement hooks to alter the authorities at defined intervals.\
        Configure the pallet dynamically at runtime during execution.\
        Control: There will be invulnerable candidates whose modifications can only be performed by the owner assigned through the sudo or democracy pallet.\
        The result is that the pallet_aura::Authorities will update at every block interval.",
    specification:
      "We must modify the pallet_aura::Authorities entries through an extrinsic. This allows us to add new authorities, remove existing ones, and update the current list of authorities at specific block intervals. \
      Preferred Solution: CRUD operations → xode_consensus::Candidates → hooks (block interval) → pallet_aura::Authorities.\
        Use the pallet_xode-consensus as the working pallet for the extrinsic to modify the pallet_aura::Authorities. Additionally, implement hooks to alter the authorities at defined intervals.\
        Configure the pallet dynamically at runtime during execution.\
        Control: There will be invulnerable candidates whose modifications can only be performed by the owner assigned through the sudo or democracy pallet.\
        The result is that the pallet_aura::Authorities will update at every block interval.",
    bounty_price: "1000 USDT",
    status: "",
    github_issue_url: "https://github.com/Xode-DAO/xode-blockchain-v1/issues/1",
  },
];
