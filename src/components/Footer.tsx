import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-5 w-full h-14 border-b border-border/40 bg-slate-500/95 backdrop-blur supports-[backdrop-filter]:bg-slate-500/60 grid place-content-center">
      <div className="text-center xl:max-w-4xl 2xl:max-w-6xl text-xs font-thin font-mono ">
        <span>
          Copyright © {new Date().getFullYear()} - All rights reserved by{" "}
        </span>
        <Link
          href="https://jmpmen.netlify.app"
          target="_blank"
          className="italic hover:underline text-nowrap"
        >
          James Michael Mendoza
        </Link>
      </div>
    </footer>
  );
}
