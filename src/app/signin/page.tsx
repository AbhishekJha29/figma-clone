"use client"

import Link from "next/link";
import { useActionState } from "react";
import { authenticate, register } from "../actions/auth";

export default function Page(){
    const [errorMessage, formAction, isPending] = useActionState(
        authenticate,
        undefined
    )
    return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
        <div className="w-full max-w-sm space-y-6 ">
            <h1 className="text-center text-2xl font-semibold text-gray-900">Sign In</h1>
            <form action={formAction} className="space-y-6">
                <input type="hidden" name="redirectTo" value="/dashboard"/>
                <div className="relative h-fit">
                    <input className="w-full rounded-md border border-gray-300 text-sm px-3 pb-1 pt-7 focus:border-black focus:outline-none" type="email" name="email" required/>
                    <label className="absolute left-3 top-2 text-[12px] ">E-MAIL</label>
                </div>
                <div className="relative h-fit">
                    <input className="w-full rounded-md border border-gray-300 text-sm px-3 pb-1 pt-7 focus:border-black focus:outline-none" type="password" name="password" required minLength={8}/>
                    <label className="absolute left-3 top-2 text-[12px] ">PASSWORD</label>
                </div>

                <button disabled={isPending} className="w-full rounded-md bg-black text-white text-sm py-2 font-medium hover:bg-gray-900 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-300">{isPending ? "Login..." : "Login"}</button>

                <p className="text-center text-xs text-gray-600">Don&apos;t have an Account?{" "}<Link href={"/signup"} className="text-blue-400 hover:text-blue-600">Register</Link></p>

                {errorMessage && (<p className="text-center text-sm text-red-500">{errorMessage}</p>)}
            </form>
        </div>
    </div>
    )
}