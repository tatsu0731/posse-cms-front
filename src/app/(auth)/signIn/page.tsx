"use client"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase-client"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { toast } from "sonner"

export default function SingIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({
            email, password
        })
        if (!error) {
            toast.success("ログインに成功しました！")
            router.push("/");
            return;
        }
    }

    return (
            <Card className="flex justify-center w-xl h-1/4">
                <CardHeader>
                    <CardTitle>Login to your account</CardTitle>
                    <CardDescription>
                    Enter your email below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="posse@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        </div>
                        <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            <a
                            href="#"
                            className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                            >
                            Forgot your password?
                            </a>
                        </div>
                        <Input value={password} id="password" type="password" onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                    </div>
                    <Button type="submit" className="w-full">
                    Login
                    </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                </CardFooter>
            </Card>
    )
}
