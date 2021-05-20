import { useRouter } from 'next/router'

import Page from '@/components/page'
import Main from '@/components/main'
import Title from '@/components/title'
import { fetchAlbums, fetchPhotos } from '@/lib/api'

const Album = () => {
  const { query } = useRouter()
  const { id } = query
  const { data: albums } = fetchAlbums()
  const { data: allPhotos } = fetchPhotos()
  const album = albums?.find(u => u.id === Number(id))
  const photos = allPhotos?.filter(photo => photo.albumId === album?.id)
  return (
    <Page>
      <Main className="flex flex-col p-4 space-y-4">
        <Title>{album?.title}</Title>
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {photos?.map(photo => (
            <li key={photo.id}>
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </li>
          ))}
        </ul>
      </Main>
    </Page>
  )
}

export default Album
