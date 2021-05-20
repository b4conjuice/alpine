import Page from '@/components/page'
import Main from '@/components/main'
import Title from '@/components/title'
import Albums from '@/components/albums'

const AlbumsPage = () => (
  <Page>
    <Main className="flex flex-col p-4 space-y-4">
      <Title>Albums</Title>
      <Albums />
    </Main>
  </Page>
)

export default AlbumsPage
