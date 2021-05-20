import Link from 'next/link'

import { fetchAlbums } from '@/lib/api'

const Albums = ({ userId }) => {
  const { data: allAlbums } = fetchAlbums()
  const albums = allAlbums?.filter(album =>
    userId ? album.userId === userId : true
  )
  return (
    <ul className="space-y-3">
      {albums?.map(album => (
        <li key={album.id}>
          <Link href={`/albums/${album.id}`}>
            <a className="text-blue-500 hover:text-blue-400 hover:underline">
              {album.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Albums
