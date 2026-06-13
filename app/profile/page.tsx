"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function page ()  {
  const router =useRouter()
  const pathname=usePathname()
  const searchParams=useSearchParams()
  console.log(searchParams.getAll("name"),searchParams.has("name"),"searchParams")
  const handleNavigate=()=>{

    router.push("/")
  }
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
    <h1>profile component</h1>
    <button onClick={handleNavigate}>navigate to home page</button>
    </div>
  )
}
