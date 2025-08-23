import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Title from "../../components/title";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabase-client";

export default async function Page() {
    const { data: users, error } = await supabase.from('users').select('*')
    return (
        <div className=" w-full">
            <Title title={"環境設定"} />
            <div className="pl-4 flex flex-col justify-center w-1/2">
                <h2 className=" text-xl font-bold">基本情報</h2>
                <div className="flex flex-col gap-y-4 ml-4 my-4">
                    <Label className="text-xs" htmlFor="name">名前</Label>
                    <p className="p-2 bg-gray-100 rounded-sm">{users[0].name} ( {users[0].name_kana} )</p>
                    <Label className="text-xs" htmlFor="adress">メールアドレス</Label>
                    <p className="p-2 bg-gray-100 rounded-sm">{users[0].address}</p>
                    <Label className="text-xs" htmlFor="github_id">GitHub ID</Label>
                    <p className="p-2 bg-gray-100 rounded-sm">{users[0].github_id}</p>
                    <Label className="text-xs" htmlFor="birthday">生年月日</Label>
                    <p className="p-2 bg-gray-100 rounded-sm">{users[0].birthday}</p>
                </div>
            </div>
            <div  className="pl-4 flex flex-col justify-center w-1/2">
                <h2 className=" text-xl font-bold">所属情報</h2>
                <div className="flex flex-col gap-y-4 ml-4 my-4">
                    <Label className="text-xs" htmlFor="birthday">大学学部</Label>
                    <p className="p-2 bg-gray-100 rounded-sm">{users[0].university}大学 {users[0].faculty}学部</p>
                    <Label className="text-xs" htmlFor="birthday">POSSE/期生</Label>
                    <p className="p-2 bg-gray-100 rounded-sm">POSSE{users[0].posse}{users[0].generation}期生</p>
                </div>
            </div>
            <div   className="pl-4 flex flex-col justify-center w-1/2">
                <h2 className=" text-xl font-bold">資格情報</h2>
                <div className="flex flex-col gap-y-4 ml-4 my-4">
                    <Label className="text-xs" htmlFor="birthday">インターン情報</Label>
                    <p className="p-2 bg-gray-100 rounded-sm">{users[0].internship}</p>
                    <Label className="text-xs" htmlFor="birthday">サーバントリーダー情報</Label>
                    <p className="p-2 bg-gray-100 rounded-sm">{users[0].servant}局</p>
                </div>
            </div>
            <div className="flex justify-end m-4">
                <Button>更新</Button>
            </div>
        </div>
    );
}