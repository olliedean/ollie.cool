import { getNowPlaying, getRecentlyPlayed } from "@/lib/spotify"

export default async function handler(_, res) {
  let response = await getNowPlaying()

  if (response.status === 204 || response.status > 400) {
    response = await getRecentlyPlayed()
    const data = await response.json()
    const title = data.items[0].track.name
    const artist = data.items[0].track.artists[0].name
    const albumImageUrl = data.items[0].track.album.images[0].url
    const songUrl = data.items[0].track.external_urls.spotify
    return res.status(200).json({ 
      isPlaying: false,
      title,
      artist,
      albumImageUrl,
      songUrl
    })
  }

  const song = await response.json()
  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ")
  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify

  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30",
  )

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  })
}

