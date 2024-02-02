"use client";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchBar({ className }: { className?: string }) {
  const router = useRouter();
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push(`/search?q=${encodeURIComponent(input)}`);
      setInput("");
    }
  };
  return (
    <Input
      className={cn("max-w-60", className)}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={handleSubmit}
      placeholder="Search..."
      type="text"
      value={input}
    />
  );
}
