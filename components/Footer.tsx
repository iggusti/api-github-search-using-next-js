import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="text-center p-10 border-t">
      Belajar Next.js dibuat oleh{" "}
      <span className="font-bold">
        <Link href={`https://iggusti.github.io/curriculum-vitae/`}>
          IGGUSTI
        </Link>
      </span>
    </div>
  );
}
