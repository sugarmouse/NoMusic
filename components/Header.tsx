"use client";

import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";

import Button from "./Button"

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}
export default function Header({ children, className }: HeaderProps) {
  const router = useRouter();
  const handleLogout = () => {
    // TODO: logout logic
  };

  return (
    <div
      className={twMerge(
        `h-fit w-full bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
            onClick={() => router.back()}
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>

          <button
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
            onClick={() => router.forward()}
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>

        <div className="flex md:hidden gap-x-2 items-center">
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <HiHome className="text-black" size={20}></HiHome>
          </button>
          <button className="rounded-full p-2 bg-white flex items-center justify-center hover:opacity-75 transition">
            <BiSearch className="text-black" size={20}></BiSearch>
          </button>
        </div>

        <div className="flex justify-between items-center gap-x-4">
          <>
            <div>
              <Button
                className="bg-transparent text-neutral-300 font-medium"
                onClick={()=> {
                  // TODO: Sign up handler
                }}
              >
                Sign Up
              </Button>
            </div>
            <div>
              <Button
                className="bg-white px-6 py-2"
                onClick={() => {
                  // TODO: Log in handler
                }}
              >
                Log In
              </Button>
            </div>
          </>
        </div>
      </div>
      {children}
    </div>
  );
}
