import connectMongoDB from "../../../../libs/mongodb";
import CardTemplate from "../../../../models/CardModel"
import {NextResponse} from "next/server";
import toast from "react-hot-toast";
import React from "react";

export async function POST (request) {
   try {
       const { name, location, price, area } = await request.json();
       await connectMongoDB();
       await CardTemplate.create({name, location, price, area});
       return NextResponse.json({message: "Template Created"}, {status: 201})
   } catch (error) {
       console.error('Error creating card', error)
       toast.error(<b>Error creating Card</b>)
       return NextResponse.json({message: "Template Not created"})
   }

}
//OpbXXC2z6huMI4Vl
