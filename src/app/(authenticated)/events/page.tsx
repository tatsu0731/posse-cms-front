import { Separator } from "@/components/ui/separator";
import Title from "../../components/title";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase-client";
import { format, parseISO } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';

export default async function Events() {
    const { data: events, error } = await supabase.from('events').select('*')
    console.log(events)

    // 後でlibにまとめる
    const translateDate = (data:string) => {
        // 1. ISO文字列をDateオブジェクトに変換
        const date = parseISO(data);
        // 2. 日本のタイムゾーンに変換
        const jstDate = toZonedTime(date, 'Asia/Tokyo');
        // 3. 指定した形式の文字列にフォーマット
        const formattedDate = format(jstDate, 'M/d H:m');
        return formattedDate;
    }

    return(
        <div className=" w-full">
            <Title title={"イベント確認"} />
            <div className="pl-4 flex flex-col justify-center w-1/2 m-4">
                <h2 className=" text-xl font-bold">リアイベ</h2>
                <div className="flex gap-x-4">
                    {events?.map((event) => {
                        return(
                            <Card className=" w-56" key={event.id}>
                                <CardHeader>
                                    <CardDescription className="text-xs">{translateDate(event.start_at)}-{translateDate(event.end_at)}</CardDescription>
                                    <CardTitle>{event.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-xs">参加者を見る</p>
                                    <p className="p-2 rounded-md bg-gray-100 text-sm">{event.description}</p>
                                </CardContent>
                                <Separator />
                                <CardFooter className="flex justify-between">
                                    <Button>参加</Button><Button>不参加</Button>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>
            </div>
            <Separator orientation="horizontal" />
            <div className="pl-4 flex flex-col justify-center w-1/2 m-4">
                <h2 className=" text-xl font-bold">技術講座</h2>
                <div className="flex gap-x-4">
                    <Card className=" w-56">
                        <CardHeader>
                            <CardTitle>夏のDX</CardTitle>
                            <CardDescription>今年は豊洲でBBQ後に花火をする予定です！</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button>参加</Button><Button>不参加</Button>
                        </CardFooter>
                    </Card>
                    <Card className=" w-56">
                        <CardHeader>
                            <CardTitle>夏のDX</CardTitle>
                            <CardDescription>今年は豊洲でBBQ後に花火をする予定です！</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button>参加</Button><Button>不参加</Button>
                        </CardFooter>
                    </Card>
                    <Card className=" w-56">
                        <CardHeader>
                            <CardTitle>夏のDX</CardTitle>
                            <CardDescription>今年は豊洲でBBQ後に花火をする予定です！</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button>参加</Button><Button>不参加</Button>
                        </CardFooter>
                    </Card>
                    <Card className=" w-56">
                        <CardHeader>
                            <CardTitle>夏のDX</CardTitle>
                            <CardDescription>今年は豊洲でBBQ後に花火をする予定です！</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                            <Button>参加</Button><Button>不参加</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
            <Separator orientation="horizontal"/>
            <div className="pl-4 flex flex-col justify-center w-1/2 m-4">
                <h2 className=" text-xl font-bold">イベントを開催する</h2>
            </div>
        </div>
    )
}