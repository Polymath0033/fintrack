"use client";
import { useState } from "react";
import Image from "next/image";
import Badge from "../badge";
import { useRouter } from "next/navigation";
const DashboardTitle = () => {
  const [caret, setCaret] = useState(false);
  const [tab, setTab] = useState<"" | "transactions">("");
  const router = useRouter();
  const toggleCaret = () => {
    setCaret(!caret);
  };
  const tabHandler = (tab: "" | "transactions") => {
    if (tab === "transactions") {
      router.push("/?tab=transactions");
    } else {
      router.push("/");
    }
    setTab(tab);
  }
  return (
    <div className="flex flex-col self-stretch items-start py-7 space-y-7 ">
      <div className="flex justify-between self-stretch items-start w-full [@media(max-width:500px)]:flex-col [@media(max-width:500px)]:gap-4">
        <div className="flex items-center space-x-2 sm:space-x-4 min-w-0 flex-1">
          <h1 className="text-[24px] sm:text-[34px] leading-[117.647%] font-bold -tracking-[0.68px] text-secondary [@media(max-width:500px)]:truncate">
            Wallet Ledger
            <button
              type="button"
              onClick={toggleCaret}
              className={`ml-1 sm:ml-2 ${
                caret ? "rotate-180" : ""
              } transition-transform cursor-pointer inline-block align-middle`}
            >
              {""}
              <Image
                src="/caret-down.svg"
                alt="Expand"
                width={20}
                height={20}
                className="sm:w-6 sm:h-6"
              />
            </button>
          </h1>
          <Badge status="positive" title="Active" />
        </div>
        <div className="flex gap-2 sm:gap-3 flex-shrink-0 [@media(max-width:500px)]:ml-0 [@media(min-width:501px)]:ml-2 [@media(max-width:500px)]:justify-start">
          <button
            type="button"
            className="flex items-center justify-center bg-[#4B8B9F] text-[#020303] px-3 sm:px-[18px] py-2 rounded-2xl cursor-pointer text-[13px] sm:text-[15px] font-medium leading-[133.333%]"
          >
            Share
          </button>
          <button
            type="button"
            className="flex p-2 items-center justify-center rounded-2xl bg-inherit border-[1.5px] border-[#49656E33] flex-shrink-0"
          >
            {""}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 24 25"
              fill="none"
              className="sm:w-6 sm:h-6"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 10.25C3.89543 10.25 3 11.1454 3 12.25C3 13.3546 3.89543 14.25 5 14.25C6.10457 14.25 7 13.3546 7 12.25C7 11.1454 6.10457 10.25 5 10.25ZM10 12.25C10 11.1454 10.8954 10.25 12 10.25C13.1046 10.25 14 11.1454 14 12.25C14 13.3546 13.1046 14.25 12 14.25C10.8954 14.25 10 13.3546 10 12.25ZM17 12.25C17 11.1454 17.8954 10.25 19 10.25C20.1046 10.25 21 11.1454 21 12.25C21 13.3546 20.1046 14.25 19 14.25C17.8954 14.25 17 13.3546 17 12.25Z"
                fill="#1B2528"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="flex space-x-3 items-center">
        <div className="flex items-center">
          <Image
            src="/images/avatar-1.png"
            alt="Avatar 1"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border-[1.5px] border-background shrink-0 z-10"
          />
          <Image
            src="/images/avatar-2.png"
            alt="Avatar 2"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border-[1.5px] border-background shrink-0 -ml-2 z-20"
          />
          <Image
            src="/images/avatar-3.png"
            alt="Avatar 3"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border-[1.5px] border-background shrink-0 -ml-2 z-30"
          />
          <Image
            src="/images/avatar-4.png"
            alt="Avatar 4"
            width={32}
            height={32}
            className="w-8 h-8 rounded-full border-[1.5px] border-background shrink-0 -ml-2 z-40"
          />
        </div>
        <p className=" text-[15px] leading-[133.333%] -tracking-[0.075px] text-[#15272D9E] ">
          Ava, Liam, Noah<span className="ml-1">+12 others</span>
        </p>
      </div>
      <div className="flex items-start self-stretch border-b-[1.5px] border-[#49656E33] ">
        <button
          type="button"
          onClick={() => tabHandler("")}
          className={` px-7 py-3 text-center text-[15px] font-medium leading-[133.333%] cursor-pointer hover:bg-primary-16 transition-colors  ${
            tab === ""
              ? "text-primary border-b-[1.5px]  border-[#4B8B9F]"
              : "text-[#15272D9E]"
          }`}
        >
          Overview
        </button>
        <button
          type="button"
          onClick={() => tabHandler("transactions")}
          className={` px-7 py-3 text-center text-[15px] font-medium leading-[133.333%]  cursor-pointer hover:bg-primary-16 transition-colors ${
            tab === "transactions"
              ? "text-primary border-b-[1.5px]  border-[#4B8B9F]"
              : "text-[#15272D9E]"
          }`}
        >
          Transactions
        </button>
      </div>
    </div>
  );
};

export default DashboardTitle;
