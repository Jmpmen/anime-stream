import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-slate-500/95 backdrop-blur supports-[backdrop-filter]:bg-slate-500/60">
      <div className="h-14 flex justify-between items-center w-full xl:max-w-4xl 2xl:max-w-6xl mx-auto">
        <Link href="/" className="flex items-center w-full">
          <span className="ml-2 text-lg font-thin font-mono italic">
            Anime Stream
          </span>
        </Link>
        <SearchBar className="mr-2" />
      </div>
    </header>
  );
}
