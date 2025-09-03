"use client";
import { UserButton, useUser } from "@clerk/nextjs";
export default function Home() {
  const { user } = useUser();
  return (
    <div className="p-10">
      <UserButton />
      <div className="flex flex-col gap-3 text-3xl">
        <span>FirstName:{user?.firstName}</span>
        <span>LastName:{user?.lastName}</span>
        <span>UserName:{user?.username}</span>
      </div>
    </div>
  );
}
