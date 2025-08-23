import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { supabase } from "@/lib/supabase-client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function AccountCard() {
    const router = useRouter();

    const handleSignOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            toast.success("ログアウトに成功しました！");
            router.push("/signIn");
            return;
        }
        toast.error("ログアウトに失敗しました");
        return;
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
                    <div>
                        <Image src={"/icon/more-vertical.svg"} width={20} height={20} alt="" />
                    </div>
                </HoverCardTrigger>
                <HoverCardContent>
                    <p className="hover:text-teal-600" onClick={() => handleSignOut()}>ログアウト</p>
                </HoverCardContent>
            </HoverCard>
        </div>
    )
}