import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Title from "../components/title";
import { Label } from "@/components/ui/label";

const basicInfoFields = [
    {
        id: 1,
        label: "名前",
        htmlFor: "name",
        placeholder: "山田太郎",
        inputProps: { id: "name" }
    },
    {
        id: 2,
        label: "なまえ",
        htmlFor: "name_rubi",
        placeholder: "やまだたろう"
    },
    {
        id: 3,
        label: "ニックネーム",
        htmlFor: "nickname",
        placeholder: "やまちゃん"
    },
    {
        id: 4,
        label: "メールアドレス",
        htmlFor: "adress",
        placeholder: "example.com"
    },
    {
        id: 5,
        label: "GitHub ID",
        htmlFor: "github_id",
        placeholder: "yama0401",
        inputProps: { id: "github_id" }
    }
];

const birthdayInputs = [
    { placeholder: "2005" },
    { placeholder: "04" },
    { placeholder: "01" }
];

const affiliationInputs = [
    { placeholder: "東京大学" },
    { placeholder: "教養学部" }
];

const affiliationSelects = [
    {
        id: 1,
        placeholder: "①",
        options: [
            { value: "light", label: "①" },
            { value: "dark", label: "②" },
            { value: "system", label: "③" }
        ]
    },
    {
        id: 2,
        placeholder: "1.0",
        options: [
            { value: "light", label: "3.0" },
            { value: "dark", label: "3.5" },
            { value: "system", label: "4.5" }
        ]
    }
];

const qualificationItems = [
    "POSSE JOB",
    "テック局"
];

export default function Page() {
    return (
        <div className=" w-full">
            <Title title={"環境設定"} />
            <div className="pl-4 flex flex-col justify-center w-1/2">
                <h2 className=" text-xl font-bold">基本情報</h2>
                <div className="flex flex-col gap-y-4 ml-4 my-4">
                    {basicInfoFields.map((field) => (
                        <div key={field.id}>
                            <Label htmlFor={field.htmlFor}>{field.label}</Label>
                            <Input 
                                placeholder={field.placeholder}
                                {...(field.inputProps || {})}
                            />
                        </div>
                    ))}
                    <Label htmlFor="birthday">生年月日</Label>
                    <div className="flex gap-2">
                        {birthdayInputs.map((input, index) => (
                            <Input key={index} placeholder={input.placeholder} />
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <h2 className=" text-xl font-bold">所属情報</h2>
                {affiliationInputs.map((input, index) => (
                    <Input key={index} placeholder={input.placeholder} />
                ))}
                {affiliationSelects.map((select) => (
                    <Select key={select.id}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder={select.placeholder} />
                        </SelectTrigger>
                        <SelectContent>
                            {select.options.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                ))}
            </div>
            <div>
                <h2 className=" text-xl font-bold">資格情報</h2>
                {qualificationItems.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div className="flex justify-end m-4">
                <Button>更新</Button>
            </div>
        </div>
    );
}