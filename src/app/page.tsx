import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex items-center justify-around top-0 sticky h-24">
        <div className="flex space-x-10">
          <div>[logo]</div>
          <div>[pages]</div>
        </div>
        <div className="flex space-x-10">
          <Button variant="default" className="scale-125" asChild>
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </header>
      <div className="flex justify-center">
        <h1 className="text-4xl">AAAAAAA</h1>
      </div>
    </main>
  );
}
