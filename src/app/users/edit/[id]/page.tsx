import UserForm from "./UserForm"
import { getUser } from "@/lib/getUser"

type Props = {
    params: {
        id: number,
    }
}

export default async function EditUser({ params }: Props) {
    const { id } = params

    const user = await getUser(id)

    if (!user?.id) {
        return (
            <div className="p-8 max-w-md space-y-2">
                <h1 className="text-2xl">
                    No User Found for that ID.
                </h1>
            </div>
        )
    }

    return (
        <div className="p-8 max-w-md space-y-2">
            <h1 className="text-2xl">Edit User {id}</h1>
            <UserForm user={user} />
        </div>
    )
}