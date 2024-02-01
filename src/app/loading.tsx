import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="w-full grid place-content-center h-[70vh]">
      <Loader2 className="h-16 w-16 animate-spin" />
    </div>
  );
}
