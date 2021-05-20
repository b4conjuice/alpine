import { useRouter } from 'next/router'

import Page from '@/components/page'
import Main from '@/components/main'
import Title from '@/components/title'
import { fetchUsers } from '@/lib/api'
import Albums from '@/components/albums'

const User = () => {
  const { query } = useRouter()
  const { id } = query
  const { data: users } = fetchUsers()
  const user = users?.find(u => u.id === Number(id))
  return (
    <Page>
      <Main className="flex flex-col p-4 space-y-4">
        <Title>{user?.name}</Title>
        <Albums userId={user?.id} />
      </Main>
    </Page>
  )
}

export default User
