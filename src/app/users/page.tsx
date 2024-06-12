import { getUsers } from "@/lib/getUsers"
import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import UserRow from "./UserRow"

export default async function Users() {
    const usersData = await getUsers()

    return (
        <div className="p-8 container">
            <h1 className="text-2xl">Users List</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Email</TableHead>
                        <TableHead>First</TableHead>
                        <TableHead>Last</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {usersData.map(user => (
                        <UserRow key={user.id} user={user} />
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}