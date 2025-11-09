import prisma from '@/app/components/prisma'
import { NextRequest } from 'next/server'

export async function GET(request : NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const email = searchParams.get('email')!

    const user = await prisma.user.findFirst({
        where: {
            email: email,
        },
        include: {
            profile: true
        }
    })

    return new Response(JSON.stringify(user))
}