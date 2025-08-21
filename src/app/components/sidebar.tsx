"use client"

import Link from "next/link";
import Copyright from "./copyright";
import { useRouter } from "next/router";


export default function Sidebar() {
    // const router = useRouter();
    // const selectedMenu = router.query
    // console.log(selectedMenu)

    return (
        <div className="flex flex-col items-center w-1/5 h-screen bg-gray-100 justify-between">
            <div>
                <h1 className="text-2xl font-bold my-4">POSSE CSM</h1>
                <ul className="flex flex-col gap-y-4 mt-16 font-bold">
                    <li >イベント確認</li>
                    <li className=" hover:text-sky-600">ユーザー検索</li>
                    <li className=" hover:text-sky-600">POSSE NEWS</li>
                    <li className=" hover:text-sky-600">
                        <Link href={"/configs"}>
                            環境設定
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <div className="flex flex-col my-4 font-bold">
                    <p>POSSE③：3.5</p>
                    <p>本松 達裕</p>
                </div>
                <div className="mb-4">
                    <p className=" hover:text-sky-600">ログアウト</p>
                </div>
                <Copyright />
            </div>
        </div>
    );
}