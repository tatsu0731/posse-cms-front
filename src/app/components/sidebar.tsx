"use client"

import Link from "next/link";
import Copyright from "./copyright";
import { usePathname } from "next/navigation";
import AccountCard from "./account";


export default function Sidebar() {
    const pathname = usePathname();
    console.log(pathname);

    return (
        <div className="flex flex-col items-center w-1/5 h-screen bg-gray-100 justify-between">
            <div>
                <h1 className="text-2xl font-bold my-4">
                    <Link href={"/"}>
                        POSSE CSM
                    </Link>
                </h1>
                <ul className="flex flex-col gap-y-4 mt-16 font-bold">
                    <li className={pathname === "/events" ? "text-teal-600 font-bold" : "hover:text-teal-600"}>
                        <Link href={"/events"}>
                            イベント情報
                        </Link>
                    </li>
                    <li className={pathname === "/users" ? "text-teal-600 font-bold" : "hover:text-teal-600"}>
                        <Link href={"/users"}>
                            メンバー情報
                        </Link>
                    </li>
                    <li className={pathname === "/curriculum" ? "text-teal-600 font-bold" : "hover:text-teal-600"}>
                        <Link href={"/curriculum"}>
                            カリキュラム情報
                        </Link>
                    </li>
                    <li className={pathname === "/news" ? "text-teal-600 font-bold" : "hover:text-teal-600"}>
                        <Link href={"/news"}>
                            POSSE NEWS
                        </Link>
                    </li>
                    <li className={pathname === "/configs" ? "text-teal-600 font-bold" : "hover:text-teal-600"}>
                        <Link href={"/configs"}>
                            環境設定
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex flex-col gap-4 items-center">
                <AccountCard />
                <Copyright />
            </div>
        </div>
    );
}