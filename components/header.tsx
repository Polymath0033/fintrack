"use client";
import Link from "next/link";
import Image from "next/image";
import SearchInput from "./search-input";
import Logo from "./logo";
import { useState } from "react";
const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="flex flex-col self-stretch w-full text-primary py-3 px-4 md:px-6 lg:px-8">
      <div className="flex items-center justify-between w-full">
        <Link className="flex items-center gap-3 md:gap-7" href="/">
          <Logo />
        </Link>

        <div className="flex space-x-3 md:space-x-7 items-center">
          <div className="flex items-center sm:hidden space-x-3">
            <button
              type="button"
              onClick={() => setShowSearch(!showSearch)}
              className="p-1 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M21.0004 21.25L16.6504 16.9M19 11.25C19 15.6683 15.4183 19.25 11 19.25C6.58172 19.25 3 15.6683 3 11.25C3 6.83172 6.58172 3.25 11 3.25C15.4183 3.25 19 6.83172 19 11.25Z"
                  stroke="#1B2528"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="w-8 h-8 relative rounded-full border-[1.5px] border-black">
              <Image
                src="/images/avatar-1.png"
                alt="User Avatar"
                width={32}
                height={32}
                className="rounded-full w-8 h-8 object-cover"
              />
            </div>
          </div>

          <div className="hidden sm:flex items-center space-x-3 md:space-x-7">
            <div className="flex items-center gap-2">
              {showSearch && (
                <div className="mr-2">
                  <SearchInput />
                </div>
              )}
              <button
                type="button"
                onClick={() => setShowSearch(!showSearch)}
                className="p-1 hover:bg-gray-100 rounded-md transition-colors"
                aria-label="Toggle search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M21.0004 21.25L16.6504 16.9M19 11.25C19 15.6683 15.4183 19.25 11 19.25C6.58172 19.25 3 15.6683 3 11.25C3 6.83172 6.58172 3.25 11 3.25C15.4183 3.25 19 6.83172 19 11.25Z"
                    stroke="#1B2528"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M10 3.25H3V10.25H10V3.25Z"
                stroke="#1B2528"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 3.25H14V10.25H21V3.25Z"
                stroke="#1B2528"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 14.25H14V21.25H21V14.25Z"
                stroke="#1B2528"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10 14.25H3V21.25H10V14.25Z"
                stroke="#1B2528"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="w-8 h-8 md:w-10 md:h-10 relative rounded-full border-[1.5px] border-black">
              <Image
                src="/images/avatar-1.png"
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full w-8 h-8 md:w-10 md:h-10 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {showSearch && (
        <div className="sm:hidden w-full mt-3">
          <SearchInput />
        </div>
      )}
    </header>
  );
};

export default Header;
