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
            Unlock New Possibilities. Get Rewarded for Your Code.
          </h1>
          <div className="text-center flex flex-col items-center gap-4">
            <h2 className="text-center font-bold text-theme-accent">
              Discover a world where innovation meets collaboration.
            </h2>
            <p className="text-center max-w-[500px] text-slate-400">
              Xode Bounty is the ultimate platform for developers to solve
              real-world challenges, showcase their skills, and earn rewards.
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
