import { Button } from "@/components/ui/button";
import Title from "../../components/title";
import { Label } from "@/components/ui/label";

interface User {
    name: string;
    name_kana: string;
    address: string;
    github_id: string;
    birthday: string;
    university: string;
    faculty: string;
    posse: string;
    generation: string;
    internship: string;
    servant: string;
}

const basicInfoFields = [
    {
        id: 1,
        label: "名前",
        htmlFor: "name",
        getValue: (user: User) => `${user.name} ( ${user.name_kana} )`
    },
    {
        id: 2,
        label: "メールアドレス",
        htmlFor: "adress",
        getValue: (user: User) => user.address
    },
    {
        id: 3,
        label: "GitHub ID",
        htmlFor: "github_id",
        getValue: (user: User) => user.github_id
    },
    {
        id: 4,
        label: "生年月日",
        htmlFor: "birthday",
        getValue: (user: User) => user.birthday
    }
];

const affiliationFields = [
    {
        id: 1,
        label: "大学学部",
        htmlFor: "university",
        getValue: (user: User) => `${user.university}大学 ${user.faculty}学部`
    },
    {
        id: 2,
        label: "POSSE/期生",
        htmlFor: "posse",
        getValue: (user: User) => `POSSE${user.posse}${user.generation}期生`
    }
];

const qualificationFields = [
    {
        id: 1,
        label: "インターン情報",
        htmlFor: "internship",
        getValue: (user: User) => user.internship
    },
    {
        id: 2,
        label: "サーバントリーダー情報",
        htmlFor: "servant",
        getValue: (user: User) => `${user.servant}局`
    }
];

// Mock user data for demonstration
const mockUser: User = {
    name: "山田太郎",
    name_kana: "やまだたろう",
    address: "example@example.com",
    github_id: "yama0401",
    birthday: "2005-04-01",
    university: "東京",
    faculty: "教養",
    posse: "③",
    generation: "3.5",
    internship: "POSSE JOB",
    servant: "テック"
};

export default function Page() {
    return (
        <div className=" w-full">
            <Title title={"環境設定"} />
            <div className="pl-4 flex flex-col justify-center w-1/2">
                <h2 className=" text-xl font-bold">基本情報</h2>
                <div className="flex flex-col gap-y-4 ml-4 my-4">
                    {basicInfoFields.map((field) => (
                        <div key={field.id}>
                            <Label className="text-xs" htmlFor={field.htmlFor}>{field.label}</Label>
                            <p className="p-2 bg-gray-100 rounded-sm">{field.getValue(mockUser)}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div  className="pl-4 flex flex-col justify-center w-1/2">
                <h2 className=" text-xl font-bold">所属情報</h2>
                <div className="flex flex-col gap-y-4 ml-4 my-4">
                    {affiliationFields.map((field) => (
                        <div key={field.id}>
                            <Label className="text-xs" htmlFor={field.htmlFor}>{field.label}</Label>
                            <p className="p-2 bg-gray-100 rounded-sm">{field.getValue(mockUser)}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div   className="pl-4 flex flex-col justify-center w-1/2">
                <h2 className=" text-xl font-bold">資格情報</h2>
                <div className="flex flex-col gap-y-4 ml-4 my-4">
                    {qualificationFields.map((field) => (
                        <div key={field.id}>
                            <Label className="text-xs" htmlFor={field.htmlFor}>{field.label}</Label>
                            <p className="p-2 bg-gray-100 rounded-sm">{field.getValue(mockUser)}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end m-4">
                <Button>更新</Button>
            </div>
        </div>
    );
}