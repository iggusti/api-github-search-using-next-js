import Image from "next/image";
import { User } from "@/types/User";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import Link from "next/link";

export default function UserItem({ user }: Props) {
  return (
    <div className="flex justify-between items-center w-full hover:bg-zinc-100 px-[20px] py-[5px]">
      <div className="inline-flex items-center space-x-3">
        <Image
          alt="profile"
          width={40}
          height={40}
          src={user?.avatar_url}
          className="rounded-full"
        ></Image>
        <span>{user.login}</span>
      </div>
      <span className="hover:bg-black hover:text-white p-3">
        <Link href={`detail/${user.login}`}>
          <ChevronRightIcon className="w-4 h-4"></ChevronRightIcon>
        </Link>
      </span>
    </div>
  );
}

interface Props {
  user: User;
}
