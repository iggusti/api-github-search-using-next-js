import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="flex flex-row items-center space-x-5 justify-center">
      <Image alt="logo" src={"/github.png"} width={100} height={100}></Image>
      <div>
        <p className="text-5xl">Cari Orang</p>
        <p className="text-4xl font-bold">GitHub</p>
      </div>
    </div>
  );
}
