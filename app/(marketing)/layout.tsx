import Link from "next/link"

export default function LayoutPage({children}:{children:React.ReactNode}){
    return(
        <div>
            <nav>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}> About  </Link>
                <Link href={"/contact"}>Contact</Link>
            </nav>
            <main>{children}</main>
        </div>
    )
}
