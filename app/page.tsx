"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const kodai = [
  {
    vardas: "Ornamentas",
    atsiuntimas: "/ornamentas.mblock",
  },
];

export default function Page() {
  return (
    <main className="h-screen bg-black flex flex-col items-center justify-center p-8">
      <div className="flex flex-col bg-zinc-900 rounded-lg w-full h-full max-w-3xl p-8">
        <Link
          href="https://ide.mblock.cc"
          className="bg-zinc-800 text-zinc-300 text-2xl rounded-lg p-4 text-center w-full mb-4"
          target="_blank"
        >
          ・ ide.mblock.cc ・
        </Link>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mx-auto">
          {kodai.map((item) => (
            <form
              method="get"
              action={item.atsiuntimas}
              className="flex"
              key={item.vardas}
            >
              <Button
                type="submit"
                className="text-zinc-300 text-lg rounded-lg px-8 py-3.5 self-center bg-zinc-800 hover:bg-zinc-700 transition-all mx-auto"
              >
                {item.vardas}
              </Button>
            </form>
          ))}
        </div>
      </div>
    </main>
  );
}
