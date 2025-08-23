import RegisterStudyHours from "../../components/registerStudyHours";
import Title from "../../components/title";

export default function Curriculum() {
    return(
        <div className=" w-full">
            <Title title={"カリキュラム"} />
            <div className="pl-4 flex flex-col justify-center w-1/2 m-4">
                <h2 className=" text-xl font-bold">学習時間遷移</h2>
                <div className="flex gap-x-4">
                    <RegisterStudyHours />
                </div>
            </div>
        </div>
    )
}