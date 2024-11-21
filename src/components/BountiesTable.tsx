import { bounty_sample_data } from "@/data/bounty.data";

export function BountiesTable() {
  function formatDateToRelative(dateString: string): string {
    const givenDate: Date = new Date(dateString);
    const now: Date = new Date();

    const diffInMs: number = now.getTime() - givenDate.getTime();
    const diffInDays: number = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "1 day ago";
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} week(s) ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} month(s) ago`;

    return `${Math.floor(diffInDays / 365)} year(s) ago`;
  }

  return (
    <div>
      <h3 className="font-bold uppercase mb-4 text-theme-accent">
        Suggested Contributions
      </h3>
      <table className="w-full">
        <tbody>
          {bounty_sample_data.map((row, k) => {
            return (
              <tr key={`bounty-row-${k}`}>
                <td className={"p-2 border-b " + (k == 0 && "border-t")}>
                  icon
                </td>
                <td className={"p-2 border-b " + (k == 0 && "border-t")}>
                  <strong className="font-bold">{row.title}</strong>
                  <p className="text-sm text-slate-400 truncate max-w-[400px]">
                    {row.description}
                  </p>
                </td>
                <td className={"p-2 border-b " + (k == 0 && "border-t")}>
                  <p className="text-slate-500 text-sm border text-center w-fit py-1 px-2 rounded-lg border-slate-100">
                    {formatDateToRelative(row.date)}
                  </p>
                </td>
                <td className={"p-2 border-b " + (k == 0 && "border-t")}>
                  <button className="bg-theme-default text-white py-2 px-6 text-sm rounded-lg font-bold">
                    Apply
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
