"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

export default function AccountCard() {
    const handleSignOut = () => {
        // Sign out functionality would be implemented here
        console.log("Sign out clicked");
    }

    return(
        <div className="border-2 border-gray-400 rounded-md px-8 py-4">
            <HoverCard>
                <HoverCardTrigger className="flex gap-x-2 items-center">
                    <Avatar>
                        <AvatarImage src="https://github.com/tatsu0731.png" alt="@icon" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-gray-500 text-xs font-bold">POSSE③：3.5</p>
                        <p className="font-bold">本松 達裕</p>
                    </div>
                </HoverCardTrigger>
                <HoverCardContent>
                    <p className="hover:text-teal-600 cursor-pointer" onClick={handleSignOut}>ログアウト</p>
                </HoverCardContent>
            </HoverCard>
        </div>
    )
}