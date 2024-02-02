import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-slate-500/95 backdrop-blur supports-[backdrop-filter]:bg-slate-500/60">
      <div className="h-14 flex items-center w-full xl:max-w-4xl 2xl:max-w-6xl mx-auto">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="ml-2 text-lg font-thin font-mono italic">
            Anime Stream
          </span>
        </Link>
      </div>
    </header>
  );
}
