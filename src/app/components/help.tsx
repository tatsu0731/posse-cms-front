import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { HelpCircle } from "lucide-react";

export default function Help() {
    return(
        <Tooltip>
            <TooltipTrigger>
                <div className=" p-6 rounded-full bg-teal-600 text-white">
                    <HelpCircle />
                </div>
            </TooltipTrigger>
            <TooltipContent>
                <p>お助け情報</p>
            </TooltipContent>
        </Tooltip>
    )
}