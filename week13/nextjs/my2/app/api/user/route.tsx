import { NextRequest, NextResponse } from "next/server";

export function GET(req:NextRequest){
    return NextResponse.json({
        email:"hark@gmail.com",
        name:"chal be"

    })
}

export async  function POST(req:NextRequest){
    const body = await req.json();
    // console.log(body);
    // //headers 
    // console.log(req.headers.get("authorization"))
    // //qurey paramaters
    // console.log(req.nextUrl.searchParams.get("name"))
    return NextResponse.json({
        body
    })
}