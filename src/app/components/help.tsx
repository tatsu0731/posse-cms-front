import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Link } from "lucide-react";

export default function Help() {
    return(
        <Tooltip>
            <TooltipTrigger>
                <div className=" p-6 rounded-full bg-teal-600 text-white">
                    <Link href="/">？</Link>
                </div>
            </TooltipTrigger>
            <TooltipContent>
                <p>お助け情報</p>
            </TooltipContent>
        </Tooltip>
    )
}