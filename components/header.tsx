import Link from "next/link";
import Image from "next/image";
import SearchInput from "./search-input";
import Logo from "./logo";
const Header = () => {
  return (
    <header className="flex items-center justify-between self-stretch w-full text-primary py-3 px-4 md:px-6 lg:px-8">
      <Link className="flex items-center gap-3 md:gap-7" href="/">
        <Logo />
      </Link>

     
      <div className="hidden md:flex flex-1 justify-center max-w-md mx-4 lg:mx-8">
        <SearchInput />
      </div>

      <div className="flex space-x-3 md:space-x-7 items-center">
    
        <div className="hidden items-center sm:flex space-x-3 md:space-x-7">
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
          <div className="w-10 h-10 relative rounded-full border-[1.5px] border-black">
            <Image
              src="/images/avatar-1.png"
              alt="User Avatar"
              width={40}
              height={40}
              className="rounded-full w-10 h-10 object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
