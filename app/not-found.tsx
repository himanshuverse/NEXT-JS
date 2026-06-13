"use client"

import { useRouter } from "next/navigation"

export default function notFoundPage(){
    const router=useRouter()
    return(
        <div>
            <h1>page not exists</h1>
            <button onClick={()=>router.push("/")}> go to homepage</button>
        </div>
    )
}