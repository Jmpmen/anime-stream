import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-5 w-full border-b border-border/40 bg-slate-500/95 backdrop-blur supports-[backdrop-filter]:bg-slate-500/60">
      <div className="h-14 flex justify-center items-center w-full xl:max-w-4xl 2xl:max-w-6xl mx-auto text-xs font-thin font-mono ">
        <span>
          Copyright © {new Date().getFullYear()} - All rights reserved by
        </span>
        <Link
          href="https://jmpmen.netlify.app"
          target="_blank"
          className="ml-1 italic hover:underline"
        >
          James Michael Mendoza
        </Link>
      </div>
    </footer>
  );
}
