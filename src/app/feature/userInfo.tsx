import Title from "../components/title";

export default function UserInfo() {
    return (
        <div className="w-full">
            <Title title={"トップページ"} />
            <div className="pl-4 flex flex-col justify-center w-1/2">
                <h2 className="text-xl font-bold">カリキュラム進捗</h2>
                <h2 className="text-xl font-bold">今週のスケジュール一覧</h2>
                <h2 className="text-xl font-bold">今月のリアイベ</h2>
            </div>
        </div>
    );
}