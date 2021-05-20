import useSwr from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())

const api = {
  users: 'https://jsonplaceholder.typicode.com/users',
  albums: 'https://jsonplaceholder.typicode.com/albums',
  photos: 'https://jsonplaceholder.typicode.com/photos',
}

export const fetchUsers = () => useSwr(api.users, fetcher)
export const fetchAlbums = () => useSwr(api.albums, fetcher)
export const fetchPhotos = () => useSwr(api.photos, fetcher)
