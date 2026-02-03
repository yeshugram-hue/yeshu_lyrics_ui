import TeluguSongIndex from "@/components/LandingPage";

export default async function Page({ params }: { params: Promise<{ canonicaltag: string }> }) {
  const lyricsResp = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/lyrics/all', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const songData = await lyricsResp.json();
  return (
    <div>
      <TeluguSongIndex
        lyrics={songData?.data?.data}
      />
    </div>
  )
}