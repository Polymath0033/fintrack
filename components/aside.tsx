"use client";
import Link from "next/link";
import { usePathname} from "next/navigation";
const Aside = () => {
    const pathname = usePathname();
    const isActive = (path: string) => {
        return pathname === path ? "bg-primary-16 text-primary" : "text-secondary";
    };
    return(
        <aside className="w-full lg:w-78 h-auto lg:h-full flex flex-row lg:flex-col items-start self-stretch py-4 lg:py-7 px-4 lg:px-0">
        <Link href="/" className={`flex px-3 lg:px-[18px] py-2 items-center self-stretch rounded-xl lg:rounded-2xl ${isActive("/")} text-sm lg:text-[15px] font-medium !leading-[133.33%] whitespace-nowrap`}>
          Dashboard
        </Link>
        <Link href="/transactions" className={`flex px-3 lg:px-[18px] py-2 items-center self-stretch rounded-xl lg:rounded-2xl ${isActive("/transactions")} text-sm lg:text-[15px] font-medium !leading-[133.33%] whitespace-nowrap`}>
          Transactions
        </Link> 
        <Link href="/reports" className={`flex px-3 lg:px-[18px] py-2 items-center self-stretch rounded-xl lg:rounded-2xl ${isActive("/reports")} text-sm lg:text-[15px] font-medium !leading-[133.33%] whitespace-nowrap`}>
          Reports
        </Link>
        <Link href="/settings" className={`flex px-3 lg:px-[18px] py-2 items-center self-stretch rounded-xl lg:rounded-2xl ${isActive("/settings")} text-sm lg:text-[15px] font-medium !leading-[133.33%] whitespace-nowrap`}>
          Settings
        </Link>
        </aside>
    )
}

export default Aside;