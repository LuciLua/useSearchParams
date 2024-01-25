import { Suspense } from "react";
import { ColorSelector } from "../components/ColorSelector";

export const dynamic = 'force-dynamic'
// 'automatic' | 'dynamic force' | 'error' | 'static force'

export default function homepage({ searchParams }) {

    return (
        <div className="flex justify-center items-center flex-col min-h-[100svh] max-w-[700px] w-full p-[30px] m-auto">
            <h1 className="text-center text-[30px] py-3 text-[#ffffff]">useSearchParam in a server page with client components</h1>
            <Suspense fallback={<div className="flex flex-col justify-center items-center"><div className="animate-spin bg-white w-[30px] h-[30px] my-4"/><p className="text-white">Loading...</p></div>}>
                <ColorSelector searchParams={searchParams}/>
            </Suspense>
        </div>
    )
} 