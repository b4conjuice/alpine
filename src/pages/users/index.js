import Page from '@/components/page'
import Main from '@/components/main'
import Title from '@/components/title'
import Users from '@/components/users'

const UsersPage = () => (
  <Page>
    <Main className="flex flex-col p-4 space-y-4">
      <Title>Users</Title>
      <Users />
    </Main>
  </Page>
)

export default UsersPage
