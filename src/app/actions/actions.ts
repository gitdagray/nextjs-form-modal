"use server"

import { UserSchema } from "@/schemas/User"
import type { User } from "@/schemas/User"

type ReturnType = {
    message: string,
    errors?: Record<string, unknown>
}

export async function saveUser(user: User): Promise<ReturnType> {
    // Test errors: 
    // user.firstname = "D"
    // user.email = ""

    const parsed = UserSchema.safeParse(user)

    if (!parsed.success) {
        return {
            message: "Submission Failed",
            errors: parsed.error.flatten().fieldErrors
        }
    }

    await fetch(`http://localhost:3500/users/${user.id}`, {
        method: 'PATCH',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
        })
    })

    return { message: "User Updated! 🎉" }
}