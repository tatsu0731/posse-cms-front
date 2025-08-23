import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Title from "../components/title";
import { Label } from "@/components/ui/label";

const UserData = [
    {
        id: 1,
        label: "名前",
        data: "name",
        placeholder: "山田太郎",
    },
    {
        id: 2,
        label: "なまえ",
        data: "name_rubi",
        placeholder: "やまだたろう",
    },
    {
        id: 3,
        label: "ニックネーム",
        data: "nickname",
        placeholder: "やまちゃん",
    },
    {
        id: 4,
        label: "メールアドレス",
        data: "address",
        placeholder: "example.com",
    },
    {
        id: 5,
        label: "GitHub ID",
        data: "github_id",
        placeholder: "yama0401",
    },
];

export default function Page() {
    return (
        <div className=" w-full">
            <Title title={"環境設定"} />
            <div className="pl-4 flex flex-col justify-center w-1/2">
                <h2 className=" text-xl font-bold">基本情報</h2>
                <div className="flex flex-col gap-y-4 ml-4 my-4">
                    {UserData.map((user) => (
                        <div key={user.id}>
                            <Label htmlFor={user.data}>{user.label}</Label>
                            <Input id={user.data} placeholder={user.placeholder}/>
                        </div>
                    ))}
                    <Label htmlFor="birthday">生年月日</Label>
                    <div className="flex gap-2">
                        <Input placeholder="2005"/>
                        <Input placeholder="04"/>
                        <Input placeholder="01"/>
                    </div>
                </div>
            </div>
            <div>
                <h2 className=" text-xl font-bold">所属情報</h2>
                <Input placeholder="東京大学"/>
                <Input placeholder="教養学部"/>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="①" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">①</SelectItem>
                        <SelectItem value="dark">②</SelectItem>
                        <SelectItem value="system">③</SelectItem>
                    </SelectContent>
                </Select>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="1.0" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="light">3.0</SelectItem>
                        <SelectItem value="dark">3.5</SelectItem>
                        <SelectItem value="system">4.5</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <h2 className=" text-xl font-bold">資格情報</h2>
                <p>POSSE JOB</p>
                <p>テック局</p>
            </div>
            <div className="flex justify-end m-4">
                <Button>更新</Button>
            </div>
        </div>
    );
}