import Link from "next/link"

export default function Home() {
  return (
    <main className="p-8">
      <Link
        href="/users"
        className="text-xl underline"
      >View Users</Link>
    </main>
  )
}
