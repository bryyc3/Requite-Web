import Link from "next/link"

export default function authenticate(){
    return(
        <main className="bg-gradient-to-t from-orange-400 to-orange-600 min-h-screen w-full">
             <Link  href= "/" className="px-3 bg-gradient-to-r from-gray-200 to-gray-300 bg-clip-text text-transparent font-bold text-[27px] top-0 relative">Requite</Link>
             <div>
                <h1>Requite Dashboard</h1>
             </div>
             <div>
                <p>Access your dashboard from anywhere <br /> Dowload our mobile app</p>
             </div>
        </main>
       
    )
}