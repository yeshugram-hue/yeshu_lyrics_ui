
import LyricsPreview from "@/components/SongLyricsPreview";

export async function generateStaticParams() {
    const postsResp = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/lyrics/all').then((res) =>
        res.json()
    )
    return postsResp.data.data.map((post: any) => ({
        id: String(post.id),
    }))
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const lyricsResp = await fetch(process.env.NEXT_PUBLIC_API_URL + '/api/lyrics/' + (await params).id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    });
    const songData = await lyricsResp.json();
    return (
        <div>
            <LyricsPreview
                data={songData?.data?.data?.[0]}
            />
        </div>
    )
}