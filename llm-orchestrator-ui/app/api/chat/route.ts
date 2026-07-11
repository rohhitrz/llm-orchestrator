import orchestrate from "@/lib/orchestrator"
import judge from "@/lib/judge"

export async function POST(req: Request){
    const body= await req.json()
    const question=body.question

    const responses=await orchestrate(question)
    const answer=await judge(question,responses)

    return Response.json({responses,answer})
}