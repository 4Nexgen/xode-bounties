import { BountiesTable } from "@/components/BountiesTable";

export default function Home() {
  return (
    <div>
      <div
        className="bg-theme-blue-dark text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/home-banner.webp")' }}
      >
        <div className="container mx-auto flex flex-col items-center justify-center py-8 px-10 h-screen gap-8">
          <h1 className="text-[4em] text-center font-bold leading-none">
            Explore Xode Blockchain Bounties and Earn Rewards
          </h1>
          <div className="text-center flex flex-col items-center gap-4">
            <h2 className="text-center font-bold text-theme-accent">
              Stay up to date with the latest issues and bounties posted by the
              Xode Blockchain team.
            </h2>
            <p className="text-center max-w-[500px] text-slate-400">
              This platform showcases the current challenges within the Xode
              Blockchain ecosystem, where developers can resolve issues and earn
              rewards.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-10 min-h-screen">
        <BountiesTable />
      </div>
    </div>
  );
}
