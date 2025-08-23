"use client"

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function RegisterStudyHours() {
    const handleSubmit = async () => {
        toast.success("学習の記録が完了しました！");
    }

    return(
        <Dialog>
            <DialogTrigger>今日の学習を記録する</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>学習記録</DialogTitle>
                    <DialogDescription>学習を記録するぞ〜！</DialogDescription>
                </DialogHeader>
                <form>
                    <Label className="text-xs">学習時間</Label>
                    <Input />
                    <Button onClick={handleSubmit}>確定する</Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}