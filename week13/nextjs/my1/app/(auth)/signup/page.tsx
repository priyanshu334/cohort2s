import { InputBox } from "@/components/InputBox";
import Link from "next/link";

export default function page(){
    return <div className="h-screen flex justify-center flex-col">
<div className="flex justify-center ">
 <Link href='#' className="block max-w-sm  p-6 bg-white border border-gray-200">

  <div>
    <div className="px-10">
        <div className="text-3xl font-extrabold">
            Sign in
        </div>

    </div>
  </div>
 </Link>
</div>
        
    </div>
}