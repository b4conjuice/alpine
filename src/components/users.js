import Link from 'next/link'

import { fetchUsers } from '@/lib/api'

const Users = () => {
  const { data: users } = fetchUsers()
  return (
    <ul className="space-y-3">
      {users?.map(user => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            <a className="text-blue-700 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-400 hover:underline">
              {user.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Users
