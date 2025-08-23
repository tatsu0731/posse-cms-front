import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Title from "../../components/title";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Users() {
    const Users = [
        {
            name: "本松達裕",
            generation: "3.5",
            university: "明治",
            faculty: "情報コミュニケーション",
            posse: "③",
        },
        {
            name: "三木咲乃",
            generation: "3.0",
            university: "慶應",
            faculty: "SFC",
            posse: "③",
        },
        {
            name: "関根たいせい",
            generation: "3.0",
            university: "慶應",
            faculty: "商",
            posse: "③",
        },
        {
            name: "辻けんせい",
            generation: "3.5",
            university: "慶應",
            faculty: "経済",
            posse: "①",
        },
        {
            name: "大内義弘",
            generation: "4.0",
            university: "明治",
            faculty: "国際日本",
            posse: "③",
        },
        {
            name: "柳田まどか",
            generation: "4.0",
            university: "明治",
            faculty: "総合数理",
            posse: "③",
        },
        {
            name: "持丸るい",
            generation: "4.0",
            university: "明治",
            faculty: "法",
            posse: "③",
        },
        {
            name: "和田もえれ",
            generation: "5.0",
            university: "立教",
            faculty: "社会",
            posse: "③",
        },
        {
            name: "池形凌",
            generation: "3.0",
            university: "東京経済",
            faculty: "経済",
            posse: "②",
        },
        {
            name: "中井厚博",
            generation: "3.0",
            university: "早稲田",
            faculty: "基幹理工",
            posse: "②",
        },
        {
            name: "吉川結音",
            generation: "5.0",
            university: "法政",
            faculty: "社会",
            posse: "②",
        },
        {
            name: "根岸おうか",
            generation: "4.0",
            university: "明治",
            faculty: "文",
            posse: "②",
        },
    ]
    return(
        <div className=" w-full">
            <Title title={"メンバー情報"} />
            <div className="pl-4 flex flex-col justify-center w-1/2 m-4">
                <h2 className=" text-xl font-bold">メンバー一覧</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                        <TableHead>icon</TableHead>
                        <TableHead>名前</TableHead>
                        <TableHead>期生</TableHead>
                        <TableHead>所属</TableHead>
                        <TableHead>大学</TableHead>
                        <TableHead>学部</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {Users.map((user) => (
                        <TableRow key={user.name}>
                            <TableCell>
                                <Avatar>
                                    <AvatarImage src="https://github.com/tatsu0731.png" alt="@icon" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.generation}</TableCell>
                            <TableCell>{user.posse}</TableCell>
                            <TableCell>{user.university}</TableCell>
                            <TableCell>{user.faculty}</TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}