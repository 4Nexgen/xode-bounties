"use client";

import { bounty_sample_data } from "@/data/bounty.data";
import { Bounty } from "@/models/bounty.interface";
import { useState } from "react";
import Image from "next/image";

export function BountiesTable() {
  interface DialogForm {
    bounty?: Bounty;
    description?: string;
  }
  const [form, setForm] = useState<DialogForm>({});

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

  const [open_bounty_dialog, setBountyDialog] = useState(false);

  function openDialog() {
    setBountyDialog(true);
  }

  function closeDialog() {
    setBountyDialog(false);
  }

  function handleBountyClick(data: Bounty) {
    setForm({
      bounty: data,
      description: "",
    });
    openDialog();
  }

  return (
    <div>
      <h3 className="font-bold uppercase text-theme-accent">Bounties</h3>
      <p className="text-sm text-slate-400 mb-4">
        Browse the available bounties, pick a challenge, and start contributing
        to the future of blockchain development!
      </p>
      <table className="w-full">
        <tbody>
          {bounty_sample_data.map((row, k) => {
            return (
              <tr key={`bounty-row-${k}`} className="group">
                <td
                  className={
                    "group-hover:bg-slate-50 dark:group-hover:bg-slate-800 w-20 p-2 border-b dark:border-slate-800 " +
                    (k == 0 && "border-t")
                  }
                >
                  <div className="flex items-center justify-center bg-white rounded-lg p-1 h-12 w-20">
                    {row.category == "pallet" && (
                      <Image
                        src="/categories/substrate.png"
                        className="h-full w-full object-contain"
                        width={60}
                        height={40}
                        alt="substrate"
                      />
                    )}
                    {row.category == "wasm smart contract" && (
                      <Image
                        src="/categories/ink.svg"
                        alt="ink"
                        className="h-full w-full object-contain"
                        width={60}
                        height={40}
                      />
                    )}
                  </div>
                </td>
                <td
                  className={
                    "group-hover:bg-slate-50 dark:group-hover:bg-slate-800 p-2 border-b dark:border-slate-800 " +
                    (k == 0 && "border-t")
                  }
                >
                  <strong className="font-bold">{row.title}</strong>
                  <p className="text-sm text-slate-400 truncate max-w-[400px]">
                    {row.description}
                  </p>
                </td>
                <td
                  className={
                    "group-hover:bg-slate-50 dark:group-hover:bg-slate-800 p-2 border-b dark:border-slate-800 " +
                    (k == 0 && "border-t")
                  }
                >
                  <p className="text-slate-500 dark:text-slate-200 text-sm border text-center w-fit py-1 px-2 rounded-lg border-slate-100">
                    {formatDateToRelative(row.date)}
                  </p>
                </td>
                <td
                  className={
                    "group-hover:bg-slate-50 dark:group-hover:bg-slate-800 p-2 border-b dark:border-slate-800 " +
                    (k == 0 && "border-t")
                  }
                >
                  <p className="text-theme-default dark:text-white text-sm font-bold border-2 text-center w-fit px-2 rounded-lg border-theme-default darl:border-white flex flex-col items-start gap-0.5 py-1.5">
                    <span className="text-[0.7em] uppercase text-theme-default font-normal leading-none">
                      Prize
                    </span>
                    <strong className="text-lg leading-none">
                      {row.bounty_price}
                    </strong>
                  </p>
                </td>
                <td
                  className={
                    "group-hover:bg-slate-50 dark:group-hover:bg-slate-800 p-2 border-b dark:border-slate-800 " +
                    (k == 0 && "border-t")
                  }
                  align="right"
                >
                  <button
                    className="bg-theme-default text-white py-2 px-6 text-sm rounded-lg font-bold"
                    onClick={() => handleBountyClick(row)}
                  >
                    Apply
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className={
          "fixed top-0 left-0 w-full h-full z-30 bg-[#00000042] items-center justify-center p-4 transition-all duration-1000 ease-in-out " +
          (open_bounty_dialog ? "flex" : "hidden")
        }
        onClick={closeDialog}
      >
        <div
          className="bg-white dark:bg-theme-blue-dark rounded-lg max-w-[500px] overflow-hidden max-h-screen flex flex-col shadow-xl"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className="p-4 border-b dark:border-theme-border">
            <h4 className="font-bold text-xl">{form?.bounty?.title}</h4>
          </div>
          <div className="p-4 flex-1 overflow-y-auto">
            <div className="flex flex-col gap-2">
              <p>{form?.bounty?.description}</p>
              {/* <textarea
                rows={5}
                className="border dark:border-theme-border rounded-lg w-full p-4 bg-transparent"
              ></textarea> */}
            </div>
          </div>
          <div className="p-4 border-t dark:border-theme-border">
            <div className="flex flex-col text-center items-center justify-center">
              <p className="font-bold">
                Comment on GitHub with a detailed approach to solving it
              </p>
              <p className="max-w-[400px]">
                The better your explanation the more likely you are to get the
                assignment and collect Xode!
              </p>
              <a
                href={form?.bounty?.repository_url}
                target="_blank"
                className="font-bold bg-theme-default text-white py-2 px-4 text-sm rounded-lg mt-4"
              >
                Apply on Github
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
