import { db } from "@/utils/dbConnection";

export async function POST(req){
    
    const {recipe.id} = await req.json();

    await db
}