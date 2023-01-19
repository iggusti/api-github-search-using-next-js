import { useRouter } from "next/router";
import React from "react";

export default function Detail() {
  const router = useRouter();
  const { username } = router.query;

  return <div>Detail Halaman untuk User : {username}</div>;
}
